import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { ChapterReactQueryKey } from "../keys";
import {
  GetVocabularyCategoryListErrorResponseInterface,
  GetVocabularyCategoryListPayloadRequestInterface,
  GetVocabularyCategoryListSuccessResponseInterface,
} from "@/core/models/rest/jlpt/vocabulary";
import { ChapterActionEnum, ChapterContext } from "../../context";
import { fetchGetVocabularyCategoryList } from "@/core/services/rest/jlpt/vocabulary";
import { useSearchParams } from "next/navigation";

export const useGetVocabularyCategoryList = () => {
  const { state, dispatch } = React.useContext(ChapterContext);
  const searchParams = useSearchParams();
  const level = searchParams.get("level");
  const query = useQuery<
    GetVocabularyCategoryListSuccessResponseInterface,
    GetVocabularyCategoryListErrorResponseInterface
  >({
    queryKey: ChapterReactQueryKey.GetVocabularyCategoryList(),
    queryFn: () => {
      const payload: GetVocabularyCategoryListPayloadRequestInterface = {
        params: {
          level: level?.toString() ?? "",
        },
      };
      return fetchGetVocabularyCategoryList(payload);
    },
    enabled: !!level,
  });

  React.useEffect(() => {
    if (query.data && !query.isFetching) {
      const data = query.data;
      dispatch({
        type: ChapterActionEnum.SetVocabularyData,
        payload: {
          ...state.vocabulary,
          category: {
            ...state.vocabulary.category,
            items:
              data.data?.map((item) => {
                return {
                  id: item.id,
                  name: item["id-ID"],
                };
              }) ?? [],
          },
        },
      });
    }
  }, [query.data, query.isFetching]);
  return query;
};
