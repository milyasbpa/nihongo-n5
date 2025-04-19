import {
  ChapterActionEnum,
  ChapterActions,
  ChapterVocabulary,
} from "./Chapter.types";

// Vocabulary
export const ChapterVocabularyReducers = (
  state: ChapterVocabulary,
  action: ChapterActions
) => {
  switch (action.type) {
    case ChapterActionEnum.SetVocabularyData:
      return action.payload;

    default:
      return state;
  }
};
