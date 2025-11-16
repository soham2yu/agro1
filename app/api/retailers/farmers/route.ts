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

    console.log("SUPABASE SELECT farmers");

    // Return mock data if supabase is not initialized
    if (!supabase) {
      return NextResponse.json([
        {
          id: "mock-1",
          name: "John Farmer",
          region: "Punjab",
          crop: "Wheat",
          farmSize: "10 acres",
          contact: "+91 98765 43210",
          verification: "verified",
          yield: "45 tons",
          firebase_uid: "mock-uid",
          created_at: new Date().toISOString()
        },
        {
          id: "mock-2",
          name: "Sarah Farmer",
          region: "Haryana",
          crop: "Rice",
          farmSize: "8 acres",
          contact: "+91 98765 43211",
          verification: "pending",
          yield: "32 tons",
          firebase_uid: "mock-uid",
          created_at: new Date().toISOString()
        }
      ]);
    }

    const { data, error } = await supabase
      .from("farmers")
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
