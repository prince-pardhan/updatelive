import {
  NextRequest,
  NextResponse,
} from "next/server";

import { connectDB } from "@/lib/mongodb";

import News from "@/models/News";

export async function GET(
  req: NextRequest,
  { params }: any
) {
  await connectDB();

  const news =
    await News.findById(
      params.id
    );

  return NextResponse.json(
    news
  );
}

export async function PUT(
  req: NextRequest,
  { params }: any
) {
  await connectDB();

  const body =
    await req.json();

  const news =
    await News.findByIdAndUpdate(
      params.id,
      body,
      {
        new: true,
      }
    );

  return NextResponse.json(
    news
  );
}

export async function DELETE(
  req: NextRequest,
  { params }: any
) {
  await connectDB();

  await News.findByIdAndDelete(
    params.id
  );

  return NextResponse.json({
    message: "Deleted",
  });
}