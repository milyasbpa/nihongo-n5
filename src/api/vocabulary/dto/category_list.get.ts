import { z } from "zod";
import { VocabularyCategoriesEntities } from "../entities";

export const getCategoryListRequestDTO = z.object({
  level: z.string(),
});

export type GeCategoryListResponseDTO = VocabularyCategoriesEntities;
