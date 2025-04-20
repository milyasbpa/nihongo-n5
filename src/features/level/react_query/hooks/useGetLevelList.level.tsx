import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { LevelReactQueryKey } from "../keys";
import {
  GetLevelListErrorResponseInterface,
  GetLevelListSuccessResponseInterface,
} from "@/core/models/rest/jlpt/level";
import { LevelActionEnum, LevelContext } from "../../context";
import { fetchGetLevelList } from "@/core/services/rest/jlpt/level";

export const useGetLevelList = () => {
  const { state, dispatch } = React.useContext(LevelContext);

  const query = useQuery<
    GetLevelListSuccessResponseInterface,
    GetLevelListErrorResponseInterface
  >({
    queryKey: LevelReactQueryKey.GetLevelList(),
    queryFn: () => {
      return fetchGetLevelList();
    },
  });

  React.useEffect(() => {
    if (!!query.data && !query.isFetching) {
      const data = query.data;
      dispatch({
        type: LevelActionEnum.SetListData,
        payload: {
          ...state.list,
          data:
            data.data?.map((item) => {
              return {
                id: item.id,
                name: item.name,
              };
            }) ?? [],
        },
      });
    }
  }, [query.data, query.isFetching]);
  return query;
};
