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

export interface GetCategoryListSuccessResponseInterface {
  response_code: number;
  response_status: string;
  message: string;
  data: {
    id: string;
    ["id-ID"]: string;
  }[];

  redirect: null;
}

export interface GetCategoryListErrorResponseInterface {
  status: number;
  message: string;
  name: string;
}
