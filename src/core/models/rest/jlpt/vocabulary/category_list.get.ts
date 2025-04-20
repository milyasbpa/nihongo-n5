import { VocabularyCategoriesEntities } from "@/api/vocabulary/entities";
import { ApiResponse } from "@/core/utils/api";
import { NextApiRequest, NextApiResponse } from "next";

export interface GetVocabularyCategoryListRequestInterface extends NextApiRequest {
  payload: GetVocabularyCategoryListPayloadRequestInterface;
}

export interface GetVocabularyCategoryListPayloadRequestInterface {
  params: GetVocabularyCategoryListParamsRequestInterface;
}

export type GetVocabularyCategoryListParamsRequestInterface = {
  level: string;
};

export type GetVocabularyCategoryListResponseInterface = NextApiResponse<
  | GetVocabularyCategoryListSuccessResponseInterface
  | GetVocabularyCategoryListErrorResponseInterface
>;

export type GetVocabularyCategoryListSuccessResponseInterface = ApiResponse<
  VocabularyCategoriesEntities[]
>;

export interface GetVocabularyCategoryListErrorResponseInterface {
  status: number;
  message: string;
  name: string;
}
