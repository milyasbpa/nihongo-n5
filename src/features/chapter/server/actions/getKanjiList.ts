"use server";
import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { KanjiMasterEntities } from "@/core/models/database";

export interface GetKanjiList {
  level: string;
}

export const getKanjiList = async (data: GetKanjiList) => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    data.level,
    "kanji_vocabulary.csv"
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const parsed = Papa.parse<KanjiMasterEntities>(fileContent, {
    header: true,
    skipEmptyLines: true,
  });
  const strokeCollection = parsed.data.map((item) => item.kanji_id);
  const result = [...new Set(strokeCollection)].map((item, index) => {
    return {
      id: item,
      name: parsed.data[index * 4 + 1]["kanji"],
      description: parsed.data
        .filter(
          (dataItem) => dataItem.kanji === parsed.data[index * 4 + 1]["kanji"]
        )
        .map((dataItem) => dataItem.example)
        .join(", "),
    };
  });

  return result;
};
