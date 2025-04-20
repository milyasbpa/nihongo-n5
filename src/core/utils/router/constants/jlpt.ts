import { GetVocabularyCategoryListParamsRequestInterface } from "@/core/models/rest/jlpt/vocabulary";

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
  kanji: {
    getCategoryList: () => `/api/jlpt/kanji/category/list`,
    getQuestionList: () => `/api/jlpt/kanji/question/list`,
  },
};
