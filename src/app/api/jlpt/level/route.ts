import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { NextResponse } from "next/server";
import { createApiResponse } from "@/core/utils/api";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "level.csv");
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
      )
    );
  }
}
