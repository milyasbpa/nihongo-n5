import { NextApiRequest, NextApiResponse } from "next";

export interface GetLevelListRequestInterface extends NextApiRequest {
  payload?: GetLevelListPayloadRequestInterface;
}

export interface GetLevelListPayloadRequestInterface {
  path: GetLevelListPathRequestInterface;
  params?: GetLevelListParamsRequestInterface;
}

export type GetLevelListPathRequestInterface = {
  id: string;
};

export type GetLevelListParamsRequestInterface = {
  "filter[search]"?: string;
  "filter[status]"?: string;
  include?: string;
  "page[number]"?: number;
  "page[size]"?: number;
};

export type GetLevelListResponseInterface = NextApiResponse<
  GetLevelListSuccessResponseInterface | GetLevelListErrorResponseInterface
>;

export interface GetLevelListSuccessResponseInterface {
  response_code: number;
  response_status: string;
  message: string;
  data: {
    id: string;
    name: string;
  }[];

  redirect: null;
}

export interface GetLevelListErrorResponseInterface {
  status: number;
  message: string;
  name: string;
}
