import { GetVocabularyCategoryListParamsRequestInterface } from "@/core/models/rest/jlpt/category";

export const JLPTAPICollectionURL = {
  level: {
    getList: () => `/api/jlpt/level`,
  },
  vocabulary: {
    getCategoryList: (
      params: GetVocabularyCategoryListParamsRequestInterface
    ) => `/api/jlpt/vocabulary/category/${params.level}`,
    getQuestionList: () => `/api/jlpt/vocabulary/question/list`,
  },
};
