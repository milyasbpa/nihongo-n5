"use server";
import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { KanjiMasterEntities } from "@/core/models/database";

export interface GetKanjiQuestionList {
  level: string;
  kanji_id: string;
}

export const generateMultipleChoiceQuestions = async (
  data: KanjiMasterEntities[],
  count = 5
) => {
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
      .map((opt) => opt);

    const question = {
      id: `q${i + 1}`,
      prompt: {
        text: "Which one is correct?",
        ...current,
      },
      options: allOptions,
    };

    questions.push(question);
  }

  return questions;
};

export const getKanjiQuestionList = async (data: GetKanjiQuestionList) => {
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

  const filteredData = parsed.data.filter(
    (item) => item.kanji_id === data.kanji_id
  );

  const result = await generateMultipleChoiceQuestions(
    filteredData,
    filteredData.length
  );

  return result;
};
