import { GetKanjiQuestionListResponseDTO } from "@/api/kanji/dto/question_list.get";
import { ApiResponse } from "@/core/utils/api";
import { NextApiRequest, NextApiResponse } from "next";

export interface GetKanjiQuestionListRequestInterface extends NextApiRequest {
  payload: GetKanjiQuestionListPayloadRequestInterface;
}

export interface GetKanjiQuestionListPayloadRequestInterface {
  query: GetKanjiQuestionListQueryPayloadRequestInterface;
}

export type GetKanjiQuestionListQueryPayloadRequestInterface = {
  stroke: string;
  level: string;
};

export type GetKanjiQuestionListResponseInterface = NextApiResponse<
  | GetKanjiQuestionListSuccessResponseInterface
  | GetKanjiQuestionListErrorResponseInterface
>;

export type GetKanjiQuestionListSuccessResponseInterface = ApiResponse<
  GetKanjiQuestionListResponseDTO[]
>;

export interface GetKanjiQuestionListErrorResponseInterface {
  status: number;
  message: string;
  name: string;
}
