import {
  NextRequest,
  NextResponse,
} from "next/server";

import cloudinary from "@/lib/cloudinary";

import { connectDB } from "@/lib/mongodb";

import News from "@/models/News";

export async function PUT(
  req: NextRequest,
  { params }: any
) {
  try {
    await connectDB();

    const formData =
      await req.formData();

    const file =
      formData.get(
        "image"
      ) as File;

    if (!file) {
      return NextResponse.json({
        message:
          "Image required",
      });
    }

    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    const base64 =
      `data:${file.type};base64,${buffer.toString(
        "base64"
      )}`;

    const result =
      await cloudinary.uploader.upload(
        base64,
        {
          folder:
            "breaking-news",
        }
      );

    const news =
      await News.findByIdAndUpdate(
        params.id,
        {
          image:
            result.secure_url,
        },
        {
          new: true,
        }
      );

    return NextResponse.json(
      news
    );
  } catch (error: any) {
    return NextResponse.json({
      message:
        error.message,
    });
  }
}