// src/app/api/register/route.ts
import { NextResponse } from "next/server";
import { db } from "@/app/config/db"; 
import { usersTable } from "@/app/config/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (existingUser.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    await db.insert(usersTable).values({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ success: true, message: "User registered successfully" });
  } catch (err: any) {
    console.error("Registration error:", err);
    return NextResponse.json({ error: "Failed to register", details: err.message }, { status: 500 });
  }
}
