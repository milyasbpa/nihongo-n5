import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { NextResponse } from "next/server";

type Person = {
  id: string;
  name: string;
  age: string;
};

export async function GET() {
  const filePath = path.join(process.cwd(), "src", "data", "people.csv");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const parsed = Papa.parse<Person>(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  return NextResponse.json(parsed.data);
}
