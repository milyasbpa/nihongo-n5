import { KanjiActionEnum, KanjiActions, KanjiQuestion } from "./Kanji.types";

// Question
export const KanjiQuestionReducers = (
  state: KanjiQuestion,
  action: KanjiActions
) => {
  switch (action.type) {
    case KanjiActionEnum.SetQuestionData:
      return action.payload;

    default:
      return state;
  }
};
