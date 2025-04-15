import axios, { AxiosError } from "axios";
import { ENVIRONMENTS } from "@/core/environments";
import { SimplyHopAPICollectionURL } from "@/core/utils/router/constants/jlpt";
import { GetLevelListPayloadRequestInterface } from "@/core/models/rest/jlpt/level";

export const fetchGetLevelList = async (
  payload?: GetLevelListPayloadRequestInterface
) => {
  try {
    const url = `${
      ENVIRONMENTS.JLPT_API_URL
    }${SimplyHopAPICollectionURL.level.getList()}`;

    const res = await axios.get(url, { params: payload?.params });
    return res.data;
  } catch (err) {
    throw (err as AxiosError)?.response?.data || (err as AxiosError)?.response;
  }
};
