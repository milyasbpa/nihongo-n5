import { HomeActionEnum, HomeActions, HomeLevel } from "./Home.types";

// Level
export const HomeLevelReducers = (state: HomeLevel, action: HomeActions) => {
  switch (action.type) {
    case HomeActionEnum.SetLevelData:
      return action.payload;

    default:
      return state;
  }
};
