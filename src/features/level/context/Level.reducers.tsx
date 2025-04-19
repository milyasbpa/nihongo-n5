import { LevelActionEnum, LevelActions, LevelList } from "./Level.types";

// List
export const LevelListReducers = (state: LevelList, action: LevelActions) => {
  switch (action.type) {
    case LevelActionEnum.SetListData:
      return action.payload;

    default:
      return state;
  }
};
