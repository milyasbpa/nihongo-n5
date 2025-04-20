import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { VocabularyReactQueryKey } from "../keys";
import {
  GetVocabularyQuestionListErrorResponseInterface,
  GetVocabularyQuestionListPayloadRequestInterface,
  GetVocabularyQuestionListSuccessResponseInterface,
} from "@/core/models/rest/jlpt/vocabulary";
import { VocabularyActionEnum, VocabularyContext } from "../../context";
import { fetchGetVocabularyQuestionList } from "@/core/services/rest/jlpt/vocabulary/question_list.get";
import { useSearchParams } from "next/navigation";

export const useGetQuestionList = () => {
  const { state, dispatch } = React.useContext(VocabularyContext);
  const searchParams = useSearchParams();
  const level = searchParams.get("level");
  const categoryId = searchParams.get("category_id");

  const query = useQuery<
    GetVocabularyQuestionListSuccessResponseInterface,
    GetVocabularyQuestionListErrorResponseInterface
  >({
    queryKey: VocabularyReactQueryKey.GetQuestionList(),
    queryFn: () => {
      const payload: GetVocabularyQuestionListPayloadRequestInterface = {
        query: {
          level: String(level),
          category_id: String(categoryId),
        },
      };
      return fetchGetVocabularyQuestionList(payload);
    },
    enabled: !!level && !!categoryId,
  });

  React.useEffect(() => {
    if (query.data && !query.isFetching) {
      const data = query.data;
      dispatch({
        type: VocabularyActionEnum.SetQuestionData,
        payload: {
          ...state.question,
          selected: !data.data?.length ? null : 0,
          data:
            data.data
              ?.filter((_, index) => index === 0)
              .map((item) => {
                return {
                  ...item,
                  correct: false,
                  answers: [],
                };
              }) ?? [],
        },
      });
    }
  }, [query.data, query.isFetching]);
  return query;
};
