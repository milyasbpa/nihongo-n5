"use client";
import React, { createContext, useReducer, Dispatch } from "react";
import { KanjiActions, KanjiInitialStateType } from "./Kanji.types";
import { KanjiQuestionReducers } from "./Kanji.reducers";

const initialState: KanjiInitialStateType = {
  question: {
    selected: null,
    data: [],
  },
};

const KanjiContext = createContext<{
  state: KanjiInitialStateType;
  dispatch: Dispatch<KanjiActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { question }: KanjiInitialStateType,
  action: KanjiActions
) => ({
  question: KanjiQuestionReducers(question, action),
});

const KanjiProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <KanjiContext.Provider value={{ state, dispatch }}>
      {props.children}
    </KanjiContext.Provider>
  );
};

export { KanjiProvider, KanjiContext };
