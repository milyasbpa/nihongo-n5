import axios, { AxiosError } from "axios";
import { ENVIRONMENTS } from "@/core/environments";
import { JLPTAPICollectionURL } from "@/core/utils/router/constants/jlpt";
import { GetKanjiQuestionListPayloadRequestInterface } from "@/core/models/rest/jlpt/kanji";

export const fetchGetKanjiQuestionList = async (
  payload?: GetKanjiQuestionListPayloadRequestInterface
) => {
  try {
    const url = `${
      ENVIRONMENTS.JLPT_API_URL
    }${JLPTAPICollectionURL.kanji.getQuestionList()}`;

    const res = await axios.get(url, { params: payload?.query });
    return res.data;
  } catch (err) {
    throw (err as AxiosError)?.response?.data || (err as AxiosError)?.response;
  }
};
