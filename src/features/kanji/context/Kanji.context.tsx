"use client";
import React, { createContext, useReducer, Dispatch } from "react";
import { KanjiActions, KanjiInitialStateType } from "./Kanji.types";
import { KanjiQuestionReducers } from "./Kanji.reducers";
import { initialState } from "./Kanji.data";

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

const KanjiProvider = (props: {
  children: React.ReactNode;
  state: KanjiInitialStateType;
}) => {
  const [state, dispatch] = useReducer(mainReducer, props.state);

  return (
    <KanjiContext.Provider value={{ state, dispatch }}>
      {props.children}
    </KanjiContext.Provider>
  );
};

export { KanjiProvider, KanjiContext };
