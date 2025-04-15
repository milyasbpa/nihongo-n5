"use client";
import React, { createContext, useReducer, Dispatch } from "react";
import { HomeActions, HomeInitialStateType } from "./Home.types";
import { HomeLevelReducers, HomeVocabularyReducers } from "./Home.reducers";

const initialState: HomeInitialStateType = {
  level: {
    list: [],
  },
  vocabulary: {
    category: {
      items: [],
    },
  },
};

const HomeContext = createContext<{
  state: HomeInitialStateType;
  dispatch: Dispatch<HomeActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { level, vocabulary }: HomeInitialStateType,
  action: HomeActions
) => ({
  level: HomeLevelReducers(level, action),
  vocabulary: HomeVocabularyReducers(vocabulary, action),
});

const HomeProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </HomeContext.Provider>
  );
};

export { HomeProvider, HomeContext };
