import { z } from "zod";
import { KanjiMasterEntities } from "../entities";

export const getQuestionListRequestDTO = z.object({
  level: z.string(),
  stroke: z.string(),
});

export interface KanjiListOptions {
  id: string;
  text: string;
  voice_url: string;
}

export interface GetKanjiListResponseDTO {
  id: string;
  prompt: {
    text: string;
  } & KanjiMasterEntities;
  options: KanjiListOptions[];
}
