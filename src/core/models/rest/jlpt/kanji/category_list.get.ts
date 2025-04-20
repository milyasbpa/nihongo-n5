import { ApiResponse } from "@/core/utils/api";
import { NextApiRequest, NextApiResponse } from "next";

export interface GetKanjiCategoryListRequestInterface extends NextApiRequest {
  payload: GetKanjiCategoryListPayloadRequestInterface;
}

export interface GetKanjiCategoryListPayloadRequestInterface {
  query: GetKanjiCategoryListQueryPayloadRequestInterface;
}

export type GetKanjiCategoryListQueryPayloadRequestInterface = {
  level: string;
};

export type GetKanjiCategoryListResponseInterface = NextApiResponse<
  | GetKanjiCategoryListSuccessResponseInterface
  | GetKanjiCategoryListErrorResponseInterface
>;

export type GetKanjiCategoryListSuccessResponseInterface = ApiResponse<
  { id: string; name: string }[]
>;

export interface GetKanjiCategoryListErrorResponseInterface {
  status: number;
  message: string;
  name: string;
}
