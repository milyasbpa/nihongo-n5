type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

// State Collection Types
export interface CategoryInitialStateType {
  level: CategoryLevel;
}

// State Collection Types consist of:
export interface CategoryLevel {
  list: {
    id: string;
    name: string;
  }[];
}

export enum CategoryActionEnum {
  // Level
  SetLevelData = "SetLevelData",
}

// Action Collection Types
export type CategoryActions = CategoryLevelActions;

// Action Collection Types consist of:
// Level
type CategoryLevelPayload = {
  [CategoryActionEnum.SetLevelData]: CategoryLevel;
};

export type CategoryLevelActions =
  ActionMap<CategoryLevelPayload>[keyof ActionMap<CategoryLevelPayload>];
