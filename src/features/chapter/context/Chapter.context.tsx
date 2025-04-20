"use client";
import React, { createContext, useReducer, Dispatch } from "react";
import { ChapterActions, ChapterInitialStateType } from "./Chapter.types";
import {
  ChapterKanjiReducers,
  ChapterVocabularyReducers,
} from "./Chapter.reducers";

const initialState: ChapterInitialStateType = {
  vocabulary: {
    category: {
      items: [],
    },
  },
  kanji: {
    category: {
      items: [],
    },
  },
};

const ChapterContext = createContext<{
  state: ChapterInitialStateType;
  dispatch: Dispatch<ChapterActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { vocabulary, kanji }: ChapterInitialStateType,
  action: ChapterActions
) => ({
  vocabulary: ChapterVocabularyReducers(vocabulary, action),
  kanji: ChapterKanjiReducers(kanji, action),
});

const ChapterProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <ChapterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ChapterContext.Provider>
  );
};

export { ChapterProvider, ChapterContext };
