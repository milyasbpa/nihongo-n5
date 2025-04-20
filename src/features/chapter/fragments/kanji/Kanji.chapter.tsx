"use client";
import * as React from "react";
import clsx from "clsx";
import { ChapterContext } from "../../context";
import { useGetVocabularyCategoryList } from "../../react_query/hooks";
import { getDictionaries } from "../../i18n";
import Link from "next/link";
import { AppCollectionURL } from "@/core/utils/router/constants/app";
import { useSearchParams } from "next/navigation";

export const KanjiChapter = () => {
  const dictionaries = getDictionaries();
  const { state } = React.useContext(ChapterContext);
  useGetVocabularyCategoryList();
  const searchParams = useSearchParams();
  const level = searchParams.get("level");
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <h2 className={clsx("text-[1.5rem] text-[#2222224D] font-medium")}>
        {dictionaries.vocabulary.title}
      </h2>
      <div
        className={clsx(
          "grid grid-flow-col place-items-start place-content-start gap-[20px]",
          "w-full",
          "overflow-auto"
        )}
      >
        {state.vocabulary.category.items.map((category, categoryIndex) => {
          const params = new URLSearchParams({
            level: level?.toString() ?? "",
            category_id: category.id,
          });
          return (
            <Link
              className={clsx(
                "grid grid-cols-1 place-content-center place-items-center gap-[1rem]",
                "w-[4rem]"
              )}
              key={categoryIndex}
              href={AppCollectionURL.public.vocabulary(params.toString())}
            >
              <div
                className={clsx(
                  "grid grid-cols-1 place-content-center place-items-center gap-[1rem]"
                )}
              >
                <div
                  className={clsx(
                    "w-[4rem] h-[4rem]",
                    "rounded-[50%]",
                    "bg-amber-300"
                  )}
                />
                <p
                  className={clsx(
                    "text-pastel-card-primary-text text-[0.875rem] text-center"
                  )}
                >
                  {category.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
