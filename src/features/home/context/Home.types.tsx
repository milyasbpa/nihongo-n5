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
export interface HomeInitialStateType {
  level: HomeLevel;
}

// State Collection Types consist of:
export interface HomeLevel {
  list: {
    id: string;
    name: string;
  }[];
}

export enum HomeActionEnum {
  // Level
  SetLevelData = "SetLevelData",
}

// Action Collection Types
export type HomeActions = HomeLevelActions;

// Action Collection Types consist of:
// Level
type HomeLevelPayload = {
  [HomeActionEnum.SetLevelData]: HomeLevel;
};

export type HomeLevelActions =
  ActionMap<HomeLevelPayload>[keyof ActionMap<HomeLevelPayload>];
