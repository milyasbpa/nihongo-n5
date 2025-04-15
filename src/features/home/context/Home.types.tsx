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
  vocabulary: HomeVocabulary;
}

// State Collection Types consist of:
export interface HomeLevel {
  list: {
    id: string;
    name: string;
  }[];
}

export interface HomeVocabulary {
  category: {
    items: {
      id: string;
      name: string;
    }[];
  };
}

export enum HomeActionEnum {
  // Level
  SetLevelData = "SetLevelData",
  // Vocabulary
  SetVocabularyData = "SetVocabularyData",
}

// Action Collection Types
export type HomeActions = HomeLevelActions | HomeVocabularyActions;

// Action Collection Types consist of:
// Level
type HomeLevelPayload = {
  [HomeActionEnum.SetLevelData]: HomeLevel;
};

export type HomeLevelActions =
  ActionMap<HomeLevelPayload>[keyof ActionMap<HomeLevelPayload>];

// Vocabulary
type HomeVocabularyPayload = {
  [HomeActionEnum.SetVocabularyData]: HomeVocabulary;
};

export type HomeVocabularyActions =
  ActionMap<HomeVocabularyPayload>[keyof ActionMap<HomeVocabularyPayload>];
