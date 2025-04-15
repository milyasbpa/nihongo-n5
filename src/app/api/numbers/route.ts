import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { NextResponse } from "next/server";
import { createApiResponse } from "@/utils";

type Person = {
  id: string;
  name: string;
  age: string;
};

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "angka.csv");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const parsed = Papa.parse<Person>(fileContent, {
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
