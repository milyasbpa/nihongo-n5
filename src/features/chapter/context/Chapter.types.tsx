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
export interface ChapterInitialStateType {
  vocabulary: ChapterVocabulary;
}

// State Collection Types consist of:
export interface ChapterVocabulary {
  category: {
    items: {
      id: string;
      name: string;
    }[];
  };
}

export enum ChapterActionEnum {
  // Level
  SetLevelData = "SetLevelData",
  // Vocabulary
  SetVocabularyData = "SetVocabularyData",
}

// Action Collection Types
export type ChapterActions = ChapterVocabularyActions;

// Action Collection Types consist of:
// Vocabulary
type ChapterVocabularyPayload = {
  [ChapterActionEnum.SetVocabularyData]: ChapterVocabulary;
};

export type ChapterVocabularyActions =
  ActionMap<ChapterVocabularyPayload>[keyof ActionMap<ChapterVocabularyPayload>];
