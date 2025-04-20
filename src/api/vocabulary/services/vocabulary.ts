import fs from "fs";
import path from "path";
import Papa from "papaparse";
import {
  VocabularyCategoriesEntities,
  VocabularyWordsEntities,
} from "../entities";

export class VocabularyService {
  constructor() {}

  generateMultipleChoiceQuestions = (
    data: VocabularyWordsEntities[],
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
        .map((opt) => ({
          // id: String.fromCharCode(97 + index), // 'a', 'b', 'c', ...
          id: opt["id"],
          text: opt["id-ID"],
          voice_url: opt["voice_url"],
        }));

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

  async getQuestionList(data: { level: string; category_id: string }) {
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      data.level,
      "vocabulary",
      "words.csv"
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const parsed = Papa.parse<VocabularyWordsEntities>(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    const filteredData = parsed.data.filter(
      (item) => item.category_id === data.category_id
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
      "vocabulary",
      "categories.csv"
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const parsed = Papa.parse<VocabularyCategoriesEntities>(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    return parsed.data;
  }
}
