import { GetCategoryListParamsRequestInterface } from "@/core/models/rest/jlpt/category";

export const JLPTAPICollectionURL = {
  level: {
    getList: () => `/api/jlpt/level`,
  },
  category: {
    getList: (params: GetCategoryListParamsRequestInterface) =>
      `/api/jlpt/category/${params.level}`,
  },
};
