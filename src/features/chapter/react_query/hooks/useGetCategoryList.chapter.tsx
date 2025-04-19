import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { ChapterReactQueryKey } from "../keys";
import {
  GetCategoryListErrorResponseInterface,
  GetCategoryListPayloadRequestInterface,
  GetCategoryListSuccessResponseInterface,
} from "@/core/models/rest/jlpt/category";
import { ChapterActionEnum, ChapterContext } from "../../context";
import { fetchGetCategoryList } from "@/core/services/rest/jlpt/category";

export const useGetCategoryList = () => {
  const { state, dispatch } = React.useContext(ChapterContext);

  const query = useQuery<
    GetCategoryListSuccessResponseInterface,
    GetCategoryListErrorResponseInterface
  >({
    queryKey: ChapterReactQueryKey.GetCategoryList(),
    queryFn: () => {
      const payload: GetCategoryListPayloadRequestInterface = {
        params: {
          level: "n5",
        },
      };
      return fetchGetCategoryList(payload);
    },
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
            items: data.data.map((item) => {
              return {
                id: item.id,
                name: item["id-ID"],
              };
            }),
          },
        },
      });
    }
  }, [query.data, query.isFetching]);
  return query;
};
