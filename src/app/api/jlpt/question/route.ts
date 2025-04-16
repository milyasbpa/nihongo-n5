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

function generateMultipleChoiceQuestions(data: any[], count = 5) {
  const shuffled = [...data].sort(() => Math.random() - 0.5);
  const questions = [];

  for (let i = 0; i < count && i < data.length; i++) {
    const current = shuffled[i];

    // Ambil 3 opsi salah selain current
    const wrongOptions = data
      .filter((item) => item.id !== current.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const allOptions = [...wrongOptions, current]
      .sort(() => Math.random() - 0.5)
      .map((opt, index) => ({
        id: String.fromCharCode(97 + index), // 'a', 'b', 'c', ...
        text: opt["id-ID"],
        voice_url: opt["voice"],
      }));

    const question = {
      id: `q${i + 1}`,
      prompt: {
        text: current["ja-JP"],
        voice_url: current.voice,
        image_url: current.image,
      },
      options: allOptions,
      correct_text: current["id-ID"],
    };

    questions.push(question);
  }

  return questions;
}

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
    const questions = generateMultipleChoiceQuestions(
      parsed.data,
      parsed.data.length
    );
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
