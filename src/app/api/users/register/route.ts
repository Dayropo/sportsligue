import connectToMongoDB from "@/src/libs/mongodb"
import User from "@/src/models/User"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { first_name, last_name, email, username, password } =
    await request.json()
  await connectToMongoDB()
  await User.create({ first_name, last_name, email, username, password })
  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  )
}
