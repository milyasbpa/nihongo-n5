import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { KanjiReactQueryKey } from "../keys";
import {
  GetKanjiQuestionListErrorResponseInterface,
  GetKanjiQuestionListPayloadRequestInterface,
  GetKanjiQuestionListSuccessResponseInterface,
} from "@/core/models/rest/jlpt/kanji";
import { KanjiActionEnum, KanjiContext } from "../../context";
import { fetchGetKanjiQuestionList } from "@/core/services/rest/jlpt/kanji";
import { useSearchParams } from "next/navigation";

export const useGetKanjiQuestionList = () => {
  const { state, dispatch } = React.useContext(KanjiContext);
  const searchParams = useSearchParams();
  const level = searchParams.get("level");
  const stroke = searchParams.get("stroke");

  const query = useQuery<
    GetKanjiQuestionListSuccessResponseInterface,
    GetKanjiQuestionListErrorResponseInterface
  >({
    queryKey: KanjiReactQueryKey.GetQuestionList(),
    queryFn: () => {
      const payload: GetKanjiQuestionListPayloadRequestInterface = {
        query: {
          level: String(level),
          stroke: String(stroke),
        },
      };
      return fetchGetKanjiQuestionList(payload);
    },
    enabled: !!level && !!stroke,
  });

  React.useEffect(() => {
    if (query.data && !query.isFetching) {
      const data = query.data;
      dispatch({
        type: KanjiActionEnum.SetQuestionData,
        payload: {
          ...state.question,
          selected: !data.data?.length ? null : 0,
          data:
            data.data
              // ?.filter((_, index) => index === 0)
              ?.map((item) => {
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
