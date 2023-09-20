import { readdir, readdirSync } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  const files = readdirSync(
    path.join(__dirname, "../../data/chatgpt/citiesmovies")
  );

  console.log(files);

  const cityMovies = "[]";
  return NextResponse.json(cityMovies);
}
