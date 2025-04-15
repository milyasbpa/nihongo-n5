import axios, { AxiosError } from "axios";
import { ENVIRONMENTS } from "@/core/environments";
import { JLPTAPICollectionURL } from "@/core/utils/router/constants/jlpt";
import { GetCategoryListPayloadRequestInterface } from "@/core/models/rest/jlpt/category";

export const fetchGetCategoryList = async (
  payload: GetCategoryListPayloadRequestInterface
) => {
  try {
    const url = `${
      ENVIRONMENTS.JLPT_API_URL
    }${JLPTAPICollectionURL.category.getList(payload.params)}`;

    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    throw (err as AxiosError)?.response?.data || (err as AxiosError)?.response;
  }
};
