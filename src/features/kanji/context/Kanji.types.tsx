import { GetQuestionListResponseDTO } from "@/api/vocabulary/dto/question_list.get";

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
export interface KanjiInitialStateType {
  question: KanjiQuestion;
}

// State Collection Types consist of:
export interface KanjiQuestion {
  selected: null | number;
  data: QuestionWithCorrect[];
}

export type QuestionWithCorrect = GetQuestionListResponseDTO & {
  answers: string[];
  correct: boolean;
};

export enum KanjiActionEnum {
  // Question
  SetQuestionData = "SetQuestionData",
}

// Action Collection Types
export type KanjiActions = KanjiQuestionActions;

// Action Collection Types consist of:
// Question
type KanjiQuestionPayload = {
  [KanjiActionEnum.SetQuestionData]: KanjiQuestion;
};

export type KanjiQuestionActions =
  ActionMap<KanjiQuestionPayload>[keyof ActionMap<KanjiQuestionPayload>];
