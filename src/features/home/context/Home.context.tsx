"use client";
import React, { createContext, useReducer, Dispatch } from "react";
import { HomeActions, HomeInitialStateType } from "./Home.types";
import { HomeLevelReducers } from "./Home.reducers";

const initialState: HomeInitialStateType = {
  level: {
    list: [],
  },
};

const HomeContext = createContext<{
  state: HomeInitialStateType;
  dispatch: Dispatch<HomeActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ level }: HomeInitialStateType, action: HomeActions) => ({
  level: HomeLevelReducers(level, action),
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
