import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  const url = req.nextUrl;
  return NextResponse.json({url});
}