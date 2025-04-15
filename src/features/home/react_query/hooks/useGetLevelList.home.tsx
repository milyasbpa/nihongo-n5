import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { HomeReactQueryKey } from "../keys";
import {
  GetLevelListErrorResponseInterface,
  GetLevelListSuccessResponseInterface,
} from "@/core/models/rest/jlpt/level";
import { HomeActionEnum, HomeContext } from "../../context";
import { fetchGetLevelList } from "@/core/services/rest/jlpt/level";

export const useGetLevelList = () => {
  const { state, dispatch } = React.useContext(HomeContext);

  const query = useQuery<
    GetLevelListSuccessResponseInterface,
    GetLevelListErrorResponseInterface
  >({
    queryKey: HomeReactQueryKey.GetLevelList(),
    queryFn: () => {
      return fetchGetLevelList();
    },
  });

  React.useEffect(() => {
    if (query.data && !query.isFetching) {
      const data = query.data;
      dispatch({
        type: HomeActionEnum.SetLevelData,
        payload: {
          ...state.level,
          list: data.data.map((item) => {
            return {
              id: item.id,
              name: item.name,
            };
          }),
        },
      });
    }
  }, [query.data, query.isFetching]);
  return query;
};
