import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { ChapterReactQueryKey } from "../keys";
import {
  GetKanjiCategoryListErrorResponseInterface,
  GetKanjiCategoryListPayloadRequestInterface,
  GetKanjiCategoryListSuccessResponseInterface,
} from "@/core/models/rest/jlpt/kanji";
import { ChapterActionEnum, ChapterContext } from "../../context";
import { useSearchParams } from "next/navigation";
import { fetchGetKanjiCategoryList } from "@/core/services/rest/jlpt/kanji";

export const useGetKanjiCategoryList = () => {
  const { state, dispatch } = React.useContext(ChapterContext);
  const searchParams = useSearchParams();
  const level = searchParams.get("level");
  const query = useQuery<
    GetKanjiCategoryListSuccessResponseInterface,
    GetKanjiCategoryListErrorResponseInterface
  >({
    queryKey: ChapterReactQueryKey.GetKanjiCategoryList(),
    queryFn: () => {
      const payload: GetKanjiCategoryListPayloadRequestInterface = {
        query: {
          level: level?.toString() ?? "",
        },
      };
      return fetchGetKanjiCategoryList(payload);
    },
    enabled: !!level,
  });

  React.useEffect(() => {
    if (query.data && !query.isFetching) {
      const data = query.data;
      dispatch({
        type: ChapterActionEnum.SetKanjiData,
        payload: {
          ...state.kanji,
          category: {
            ...state.kanji.category,
            items:
              data.data?.map((item) => {
                return {
                  id: item.id,
                  name: item.name,
                };
              }) ?? [],
          },
        },
      });
    }
  }, [query.data, query.isFetching]);
  return query;
};
