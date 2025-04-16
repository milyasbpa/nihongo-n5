import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { NextResponse, NextRequest } from "next/server";
import { createApiResponse } from "@/core/utils/api";
import { z } from "zod";

// 1. Zod schema for validation
const querySchema = z.object({
  level: z.enum(["n5", "n4", "n3", "n2", "n1"]), // misalnya hanya JLPT levels
  category: z.string().min(1, "Category is required"),
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // 2. Convert searchParams to plain object
  const query = {
    level: searchParams.get("level"),
    category: searchParams.get("category"),
  };

  // 3. Validate with Zod
  const result = querySchema.safeParse(query);

  if (!result.success) {
    return NextResponse.json(
      createApiResponse(
        false,
        [],
        "Validation failed",
        result.error.flatten().fieldErrors
      ),
      { status: 400 }
    );
  }

  const { level, category } = result.data;

  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      level,
      "category",
      `${category}.csv`
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const parsed = Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    // Return the response using the createApiResponse utility
    return NextResponse.json(
      createApiResponse(true, parsed.data, "Data fetched successfully")
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
