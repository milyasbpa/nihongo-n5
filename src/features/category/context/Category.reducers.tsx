import {
  CategoryActionEnum,
  CategoryActions,
  CategoryLevel,
} from "./Category.types";

// Level
export const CategoryLevelReducers = (
  state: CategoryLevel,
  action: CategoryActions
) => {
  switch (action.type) {
    case CategoryActionEnum.SetLevelData:
      return action.payload;

    default:
      return state;
  }
};
