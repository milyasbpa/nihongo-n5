import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { KanjiMasterEntities } from "../entities";

export class KanjiService {
  constructor() {}

  generateMultipleChoiceQuestions = (
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
          // text: current["ja-JP"],
          text: "Which one is correct?",
          ...current,
        },
        options: allOptions,
        correct: current,
      };

      questions.push(question);
    }

    return questions;
  };

  async getQuestionList(data: { level: string; stroke: string }) {
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      data.level,
      "kanji.csv"
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const parsed = Papa.parse<KanjiMasterEntities>(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    const filteredData = parsed.data.filter(
      (item) => item.stroke === data.stroke
    );

    const questions = this.generateMultipleChoiceQuestions(
      filteredData,
      filteredData.length
    );

    return questions;
  }

  async getCategoryList(data: { level: string }) {
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      data.level,
      "kanji.csv"
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const parsed = Papa.parse<KanjiMasterEntities>(fileContent, {
      header: true,
      skipEmptyLines: true,
    });
    const strokeCollection = parsed.data.map((item) => item.stroke);
    const unique = [...new Set(strokeCollection)].map((item) => {
      return {
        id: item,
        name: item,
      };
    });

    return unique;
  }
}
