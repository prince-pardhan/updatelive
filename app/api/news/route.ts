import {
  NextRequest,
  NextResponse,
} from "next/server";

import { connectDB } from "@/lib/mongodb";

import {
  createNewsService,
  getNewsService,
} from "@/services/news.service";

export async function POST(
  req: NextRequest
) {
  try {
    await connectDB();

    const body =
      await req.json();

    const news =
      await createNewsService(
        body
      );

    return NextResponse.json({
      message:
        "News Created",

      news,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message:
          error.message,
      },
      {
        status: 400,
      }
    );
  }
}

export async function GET(
  req: NextRequest
) {
  try {
    await connectDB();

    const search =
      req.nextUrl.searchParams.get(
        "search"
      ) || "";

    const news =
      await getNewsService(
        search
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