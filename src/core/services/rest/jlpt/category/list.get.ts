import axios, { AxiosError } from "axios";
import { ENVIRONMENTS } from "@/core/environments";
import { JLPTAPICollectionURL } from "@/core/utils/router/constants/jlpt";
import { GetVocabularyCategoryListPayloadRequestInterface } from "@/core/models/rest/jlpt/category";

export const fetchGetVocabularyCategoryList = async (
  payload: GetVocabularyCategoryListPayloadRequestInterface
) => {
  try {
    const url = `${
      ENVIRONMENTS.JLPT_API_URL
    }${JLPTAPICollectionURL.vocabulary.getCategoryList(payload.params)}`;

    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    throw (err as AxiosError)?.response?.data || (err as AxiosError)?.response;
  }
};
