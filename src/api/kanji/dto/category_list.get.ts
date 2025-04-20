import { z } from "zod";
import { KanjiMasterEntities } from "../entities";

export const getCategoryListRequestDTO = z.object({
  level: z.string(),
});

export type GeCategoryListResponseDTO = {
  id: string;
  name: string;
};
