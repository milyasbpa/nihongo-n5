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
export interface LevelInitialStateType {
  list: LevelList;
}

// State Collection Types consist of:
export interface LevelList {
  data: {
    id: string;
    name: string;
  }[];
}

export enum LevelActionEnum {
  // List
  SetListData = "SetListData",
}

// Action Collection Types
export type LevelActions = LevelListActions;

// Action Collection Types consist of:
// List
type LevelListPayload = {
  [LevelActionEnum.SetListData]: LevelList;
};

export type LevelListActions =
  ActionMap<LevelListPayload>[keyof ActionMap<LevelListPayload>];
