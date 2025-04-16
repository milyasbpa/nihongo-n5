import axios, { AxiosError } from "axios";
import { ENVIRONMENTS } from "@/core/environments";
import { JLPTAPICollectionURL } from "@/core/utils/router/constants/jlpt";
import { GetVocabularyQuestionListPayloadRequestInterface } from "@/core/models/rest/jlpt/vocabulary";

export const fetchGetVocabularyQuestionList = async (
  payload?: GetVocabularyQuestionListPayloadRequestInterface
) => {
  try {
    const url = `${
      ENVIRONMENTS.JLPT_API_URL
    }${JLPTAPICollectionURL.vocabulary.getQuestionList()}`;

    const res = await axios.get(url, { params: payload?.query });
    return res.data;
  } catch (err) {
    throw (err as AxiosError)?.response?.data || (err as AxiosError)?.response;
  }
};
