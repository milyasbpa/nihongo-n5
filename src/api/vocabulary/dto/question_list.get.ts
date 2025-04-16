import { z } from "zod";

export const getQuestionListRequestDTO = z.object({
  level: z.enum(["n5", "n4", "n3", "n2", "n1"]), // misalnya hanya JLPT levels
  category: z.string().min(1, "Category is required"),
});

export interface GetQuestionListResponseDTO {
  id: string;
  prompt: {
    text: string;
    voice_url: string;
    image_url: string;
  };
  options: {
    id: string;
    text: string;
    voice_url: string;
  }[];
  correct_text: string;
}
