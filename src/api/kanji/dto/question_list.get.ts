import { z } from "zod";
import { KanjiMasterEntities } from "../entities";

export const getQuestionListRequestDTO = z.object({
  level: z.string(),
  stroke: z.string(),
});

export interface GetKanjiQuestionListResponseDTO {
  id: string;
  prompt: {
    text: string;
  } & KanjiMasterEntities;
  options: KanjiMasterEntities[];
}
