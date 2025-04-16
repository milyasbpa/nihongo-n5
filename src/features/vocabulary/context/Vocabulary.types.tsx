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
export interface VocabularyInitialStateType {
  question: VocabularyQuestion;
}

// State Collection Types consist of:
export interface VocabularyQuestion {
  selected: null | number;
  data: {
    id: string;
    prompt: {
      text: string;
      voice_url: string;
      image_url: string;
    };
    options: {
      id: string;
      text: string;
      voice_url: string;
    }[];
    correct_text: string;
  }[];
}

export enum VocabularyActionEnum {
  // Question
  SetQuestionData = "SetQuestionData",
}

// Action Collection Types
export type VocabularyActions = VocabularyQuestionActions;

// Action Collection Types consist of:
// Question
type VocabularyQuestionPayload = {
  [VocabularyActionEnum.SetQuestionData]: VocabularyQuestion;
};

export type VocabularyQuestionActions =
  ActionMap<VocabularyQuestionPayload>[keyof ActionMap<VocabularyQuestionPayload>];
