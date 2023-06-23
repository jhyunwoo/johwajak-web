import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const chapterId = searchParams.get("chapterId");
  if (typeof chapterId === "string") {
    const chapters = await prisma.chapters.findUnique({
      where: { id: chapterId },
    });
    return NextResponse.json(chapters);
  } else {
    return NextResponse.json({ result: "error" });
  }
}
