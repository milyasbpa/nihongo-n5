"use client";
import * as React from "react";
import { useGetLevelList } from "../../react_query/hooks";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { LevelCardHome } from "../../components/card";
import Link from "next/link";
import { AppCollectionURL } from "@/core/utils/router/constants/app";

export const ListLevel = () => {
  const dictionaries = getDictionaries();
  useGetLevelList();
  return (
    <div className={clsx("w-full")}>
      <h1 className={clsx("text-[1.5rem] text-primary font-medium")}>
        {"Select your Level"}
      </h1>
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
          "w-full"
        )}
      >
        {dictionaries.level.items.map((level, levelIndex) => {
          const params = new URLSearchParams({
            level: level.id,
          });
          return (
            <Link
              key={levelIndex}
              href={AppCollectionURL.public.chapter(params.toString())}
              className={clsx("w-full")}
            >
              <LevelCardHome
                image_url={level.image_url}
                title={level.title}
                background={level.background}
                color={level.color}
                borderColor={level.borderColor}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
