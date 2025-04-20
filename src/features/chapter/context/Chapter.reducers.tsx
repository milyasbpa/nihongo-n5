import {
  ChapterActionEnum,
  ChapterActions,
  ChapterKanji,
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

// Kanji
export const ChapterKanjiReducers = (
  state: ChapterKanji,
  action: ChapterActions
) => {
  switch (action.type) {
    case ChapterActionEnum.SetKanjiData:
      return action.payload;

    default:
      return state;
  }
};
