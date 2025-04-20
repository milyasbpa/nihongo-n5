import { VocabularyCategoriesEntities } from "@/api/vocabulary/entities";
import { ApiResponse } from "@/core/utils/api";
import { NextApiRequest, NextApiResponse } from "next";

export interface GetCategoryListRequestInterface extends NextApiRequest {
  payload: GetCategoryListPayloadRequestInterface;
}

export interface GetCategoryListPayloadRequestInterface {
  params: GetCategoryListParamsRequestInterface;
}

export type GetCategoryListParamsRequestInterface = {
  level: string;
};

export type GetCategoryListResponseInterface = NextApiResponse<
  | GetCategoryListSuccessResponseInterface
  | GetCategoryListErrorResponseInterface
>;

export type GetCategoryListSuccessResponseInterface = ApiResponse<
  VocabularyCategoriesEntities[]
>;

export interface GetCategoryListErrorResponseInterface {
  status: number;
  message: string;
  name: string;
}
