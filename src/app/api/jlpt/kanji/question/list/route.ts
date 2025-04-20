import { NextResponse, NextRequest } from "next/server";
import { createApiResponse } from "@/core/utils/api";
import { KanjiController } from "@/api/kanji/controllers";
import { KanjiService } from "@/api/kanji/services";

export async function GET(request: NextRequest) {
  const controller = new KanjiController();
  const service = new KanjiService();

  const validation = await controller.getQuestionList(request);
  if (!validation.success) {
    return NextResponse.json(
      createApiResponse(
        false,
        [],
        "Validation failed",
        validation.error.flatten().fieldErrors
      ),
      { status: 400 }
    );
  }

  try {
    const questions = await service.getQuestionList(validation.data);

    return NextResponse.json(
      createApiResponse(true, questions, "Data fetched successfully")
    );
  } catch (error) {
    return NextResponse.json(
      createApiResponse(
        false,
        [],
        "Failed to fetch data",
        error instanceof Error ? error.message : "Unknown error"
      ),
      {
        status: 500,
      }
    );
  }
}
