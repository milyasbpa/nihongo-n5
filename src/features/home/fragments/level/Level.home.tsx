"use client";
import * as React from "react";
import { useGetLevelList } from "../../react_query/hooks";
import clsx from "clsx";

export const LevelHome = () => {
  useGetLevelList();
  return (
    <div className={clsx("w-full")}>
      <h1 className={clsx("text-[1.5rem] text-[#2222224D] font-medium")}>
        {"JLPT N5"}
      </h1>
    </div>
  );
};
