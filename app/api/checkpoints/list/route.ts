import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebase-admin";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    // In development without Firebase env vars, allow without auth
    if (auth) {
      const authHeader = req.headers.get("authorization");
      console.log("AUTH TOKEN RECEIVED:", authHeader);

      if (!authHeader?.startsWith("Bearer ")) {
        return NextResponse.json({ error: "No token provided" }, { status: 401 });
      }

      const token = authHeader.split(" ")[1];
      await auth.verifyIdToken(token);
    }

    console.log("SUPABASE SELECT checkpoints");

    // Return mock data if supabase is not initialized
    if (!supabase) {
      return NextResponse.json([
        {
          id: "mock-1",
          name: "Delhi North Checkpoint",
          location: "Delhi",
          type: "Quality Control",
          status: "active",
          totalScans: 1250,
          verifiedProducts: 1180,
          rejectedProducts: 70,
          efficiency: "94%",
          lastActivity: new Date().toISOString(),
          firebase_uid: "mock-uid",
          created_at: new Date().toISOString()
        },
        {
          id: "mock-2",
          name: "Mumbai Central Hub",
          location: "Mumbai",
          type: "Distribution Center",
          status: "active",
          totalScans: 890,
          verifiedProducts: 850,
          rejectedProducts: 40,
          efficiency: "95%",
          lastActivity: new Date().toISOString(),
          firebase_uid: "mock-uid",
          created_at: new Date().toISOString()
        }
      ]);
    }

    const { data, error } = await supabase
      .from("checkpoints")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log("SUPABASE ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
