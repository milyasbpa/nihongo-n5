import { GetQuestionListResponseDTO } from "@/api/vocabulary/dto/question_list.get";
import { ApiResponse } from "@/core/utils/api";
import { NextApiRequest, NextApiResponse } from "next";

export interface GetVocabularyQuestionListRequestInterface
  extends NextApiRequest {
  payload: GetVocabularyQuestionListPayloadRequestInterface;
}

export interface GetVocabularyQuestionListPayloadRequestInterface {
  query: GetVocabularyQuestionListQueryPayloadRequestInterface;
}

export type GetVocabularyQuestionListQueryPayloadRequestInterface = {
  category: string;
  level: string;
};

export type GetVocabularyQuestionListResponseInterface = NextApiResponse<
  | GetVocabularyQuestionListSuccessResponseInterface
  | GetVocabularyQuestionListErrorResponseInterface
>;

export type GetVocabularyQuestionListSuccessResponseInterface = ApiResponse<
  GetQuestionListResponseDTO[]
>;

export interface GetVocabularyQuestionListErrorResponseInterface {
  status: number;
  message: string;
  name: string;
}
