'use client'
import * as React from "react";
import { useGetLevelList } from "../../react_query/hooks";

export const LevelHome = () => {
  useGetLevelList();
  return (
    <div>
      <div></div>
    </div>
  );
};
