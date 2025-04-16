"use client";
import React, { createContext, useReducer, Dispatch } from "react";
import {
  VocabularyActions,
  VocabularyInitialStateType,
} from "./Vocabulary.types";
import { VocabularyQuestionReducers } from "./Vocabulary.reducers";

const initialState: VocabularyInitialStateType = {
  question: {
    selected: null,
    data: [],
  },
};

const VocabularyContext = createContext<{
  state: VocabularyInitialStateType;
  dispatch: Dispatch<VocabularyActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { question }: VocabularyInitialStateType,
  action: VocabularyActions
) => ({
  question: VocabularyQuestionReducers(question, action),
});

const VocabularyProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <VocabularyContext.Provider value={{ state, dispatch }}>
      {props.children}
    </VocabularyContext.Provider>
  );
};

export { VocabularyProvider, VocabularyContext };
