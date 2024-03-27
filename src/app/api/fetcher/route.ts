import axios from "@/src/libs/axios"
import { NextApiRequest } from "next"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  console.log({ request })

  return NextResponse.json({ message: "Hello", status: 200 })
}
