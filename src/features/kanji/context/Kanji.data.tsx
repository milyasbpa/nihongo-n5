import { KanjiInitialStateType } from "./Kanji.types";

export const initialState: KanjiInitialStateType = {
  question: {
    selected: null,
    data: [],
    settings: {
      is_open: false,
      question: {
        selected: [],
        options: [],
      },
      answer: {
        selected: null,
        options: [],
      },
    },
  },
};
