"use client";
import React, { createContext, useReducer, Dispatch } from "react";
import { LevelActions, LevelInitialStateType } from "./Level.types";
import { LevelListReducers } from "./Level.reducers";

const initialState: LevelInitialStateType = {
  list: {
    data: [],
  },
};

const LevelContext = createContext<{
  state: LevelInitialStateType;
  dispatch: Dispatch<LevelActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { list }: LevelInitialStateType,
  action: LevelActions
) => ({
  list: LevelListReducers(list, action),
});

const LevelProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <LevelContext.Provider value={{ state, dispatch }}>
      {props.children}
    </LevelContext.Provider>
  );
};

export { LevelProvider, LevelContext };
