"use client";
import * as React from "react";
import clsx from "clsx";
import { HomeContext } from "../../context";
import { Card } from "@/core/components/card";
import { useGetCategoryList } from "../../react_query/hooks";

export const VocabularyHome = () => {
  const { state } = React.useContext(HomeContext);
  useGetCategoryList();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <h2 className={clsx("text-[2rem] text-[#2222224D] font-medium")}>
        {"Vocabulary"}
      </h2>
      <div
        className={clsx(
          "grid grid-rows-2 grid-flow-col place-items-start place-content-start gap-[20px]",
          "w-full",
          "overflow-auto"
        )}
      >
        {state.vocabulary.category.items.map((category, categoryIndex) => (
          <Card key={categoryIndex} className={clsx("w-[160px] h-[160px]")}>
            <p className={clsx("text-[black] text-[0.875rem]")}>
              {category.name}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};
