"use client";
import React, { createContext, useReducer, Dispatch } from "react";
import { CategoryActions, CategoryInitialStateType } from "./Category.types";
import { CategoryLevelReducers } from "./Category.reducers";

const initialState: CategoryInitialStateType = {
  level: {
    list: [],
  },
};

const CategoryContext = createContext<{
  state: CategoryInitialStateType;
  dispatch: Dispatch<CategoryActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { level }: CategoryInitialStateType,
  action: CategoryActions
) => ({
  level: CategoryLevelReducers(level, action),
});

const CategoryProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };
