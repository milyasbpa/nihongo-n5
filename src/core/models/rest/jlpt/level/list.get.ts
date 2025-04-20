import { GetLevelListResponseDTO } from "@/api/level/dto/level_list.get";
import { ApiResponse } from "@/core/utils/api";
import { NextApiRequest, NextApiResponse } from "next";

export interface GetLevelListRequestInterface extends NextApiRequest {
  payload?: GetLevelListPayloadRequestInterface;
}

export interface GetLevelListPayloadRequestInterface {
  path: GetLevelListPathPayloadRequestInterface;
  params?: GetLevelListParamsPayloadRequestInterface;
}

export type GetLevelListPathPayloadRequestInterface = {
  id: string;
};

export type GetLevelListParamsPayloadRequestInterface = {
  page?: number;
  limit?: number;
};

export type GetLevelListResponseInterface = NextApiResponse<
  GetLevelListSuccessResponseInterface | GetLevelListErrorResponseInterface
>;

export type GetLevelListSuccessResponseInterface = ApiResponse<
  GetLevelListResponseDTO[]
>;

export interface GetLevelListErrorResponseInterface {
  status: number;
  message: string;
  name: string;
}
