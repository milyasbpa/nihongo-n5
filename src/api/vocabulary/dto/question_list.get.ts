import { z } from "zod";
import { VocabularyEntities } from "../entities";

export const getQuestionListRequestDTO = z.object({
  level: z.enum(["n5", "n4", "n3", "n2", "n1"]), // misalnya hanya JLPT levels
  category: z.string().min(1, "Category is required"),
});

export interface QuestionListOptions {
  id: string;
  text: string;
  voice_url: string;
}

export interface GetQuestionListResponseDTO {
  id: string;
  prompt: {
    text: string;
  } & VocabularyEntities;
  options: QuestionListOptions[];
}
