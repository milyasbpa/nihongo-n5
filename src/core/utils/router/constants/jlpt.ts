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
    getCategoryList: (
      params: GetVocabularyCategoryListParamsRequestInterface
    ) => `/api/jlpt/kanji/category/${params.level}`,
    getQuestionList: () => `/api/jlpt/kanji/question/list`,
  },
};
