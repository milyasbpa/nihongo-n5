import { NextResponse, NextRequest } from "next/server";
import { createApiResponse } from "@/core/utils/api";
import { VocabularyController } from "@/api/vocabulary/controllers";
import { VocabularyService } from "@/api/vocabulary/services";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  const controller = new VocabularyController();
  const service = new VocabularyService();

  const validation = await controller.getCategoryList(params);
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
    const data = await service.getCategoryList(validation.data);

    return NextResponse.json(
      createApiResponse(true, data, "Data fetched successfully")
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
