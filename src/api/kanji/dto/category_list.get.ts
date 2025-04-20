import { z } from "zod";

export const getCategoryListRequestDTO = z.object({
  level: z.string(),
});

export type GeCategoryListResponseDTO = {
  id: string;
  name: string;
};
