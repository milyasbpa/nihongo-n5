import {
  VocabularyActionEnum,
  VocabularyActions,
  VocabularyQuestion,
} from "./Kanji.types";

// Question
export const VocabularyQuestionReducers = (
  state: VocabularyQuestion,
  action: VocabularyActions
) => {
  switch (action.type) {
    case VocabularyActionEnum.SetQuestionData:
      return action.payload;

    default:
      return state;
  }
};
