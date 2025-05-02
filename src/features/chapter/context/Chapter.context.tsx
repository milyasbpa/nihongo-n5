"use client";
import React, { createContext, useReducer, Dispatch } from "react";
import { ChapterActions, ChapterInitialStateType } from "./Chapter.types";
import {
  ChapterKanjiReducers,
  ChapterVocabularyReducers,
} from "./Chapter.reducers";
import { initialState } from "./Chapter.data";

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

const ChapterProvider = (props: {
  children: React.ReactNode;
  initialState: ChapterInitialStateType;
}) => {
  const [state, dispatch] = useReducer(mainReducer, props.initialState);

  return (
    <ChapterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ChapterContext.Provider>
  );
};

export { ChapterProvider, ChapterContext };
