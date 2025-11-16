import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebase-admin";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    // In development without Firebase env vars, allow without auth
    let firebase_uid = "mock-uid";
    if (auth) {
      const authHeader = req.headers.get("authorization");
      console.log("AUTH TOKEN RECEIVED:", authHeader);

      if (!authHeader?.startsWith("Bearer ")) {
        return NextResponse.json({ error: "No token provided" }, { status: 401 });
      }

      const token = authHeader.split(" ")[1];
      const decoded = await auth.verifyIdToken(token);
      firebase_uid = decoded.uid;
    }

    const body = await req.json();
    console.log("SUPABASE INSERT farmers:", body);

    // Only attempt database operation if supabase is initialized
    if (!supabase) {
      return NextResponse.json({
        id: "mock-id",
        ...body,
        firebase_uid,
        created_at: new Date().toISOString()
      });
    }

    const { data, error } = await supabase
      .from("farmers")
      .insert([{
        ...body,
        firebase_uid,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) {
      console.log("SUPABASE ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
