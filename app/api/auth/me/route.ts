import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebase-admin";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    // In development without Firebase env vars, return mock data
    if (!auth) {
      console.log("Firebase not initialized - returning mock user data");
      return NextResponse.json({
        uid: "mock-uid",
        email: "mock@example.com",
        role: "farmer",
        name: "Mock User",
        verified: true
      });
    }

    const authHeader = req.headers.get("authorization");
    console.log("AUTH TOKEN RECEIVED:", authHeader);

    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = await auth.verifyIdToken(token);
    console.log("DECODED TOKEN:", decoded);

    // Get user profile from Supabase (only if supabase is initialized)
    if (!supabase) {
      return NextResponse.json({
        uid: decoded.uid,
        email: decoded.email,
        role: "farmer",
        name: "Mock User",
        verified: true
      });
    }

    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("firebase_uid", decoded.uid)
      .single();

    if (error) {
      console.log("SUPABASE ERROR:", error);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      uid: decoded.uid,
      email: decoded.email,
      role: user.role,
      name: user.name,
      verified: user.verified
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
