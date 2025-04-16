import fs from "fs";
import path from "path";
import Papa from "papaparse";

export class VocabularyService {
  constructor() {}

  generateMultipleChoiceQuestions = (data: any[], count = 5) => {
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
          voice_url: opt["voice"],
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

  async getQuestionList(data: { level: string; category: string }) {
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      data.level,
      "vocabulary",
      "category",
      `${data.category}.csv`
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const parsed = Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    const questions = this.generateMultipleChoiceQuestions(
      parsed.data,
      parsed.data.length
    );

    return questions;
  }
}
