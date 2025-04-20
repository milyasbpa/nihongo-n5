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
  kanji: ChapterKanji;
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

export interface ChapterKanji {
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
  // Kanji
  SetKanjiData = "SetKanjiData",
}

// Action Collection Types
export type ChapterActions = ChapterVocabularyActions | ChapterKanjiActions;

// Action Collection Types consist of:
// Vocabulary
type ChapterVocabularyPayload = {
  [ChapterActionEnum.SetVocabularyData]: ChapterVocabulary;
};

export type ChapterVocabularyActions =
  ActionMap<ChapterVocabularyPayload>[keyof ActionMap<ChapterVocabularyPayload>];

// Kanji
type ChapterKanjiPayload = {
  [ChapterActionEnum.SetKanjiData]: ChapterKanji;
};

export type ChapterKanjiActions =
  ActionMap<ChapterKanjiPayload>[keyof ActionMap<ChapterKanjiPayload>];
