"use client";
import * as React from "react";
import clsx from "clsx";
import { ChapterContext } from "../../context";
import { getDictionaries } from "../../i18n";
import Link from "next/link";
import { AppCollectionURL } from "@/core/utils/router/constants/app";
import { useSearchParams } from "next/navigation";
import { Accordion } from "@/core/components/accordion";
import { KanjiItem } from "../../components/kanji_item";

export const KanjiChapter = () => {
  const dictionaries = getDictionaries();
  const { state } = React.useContext(ChapterContext);

  const searchParams = useSearchParams();
  const level = searchParams.get("level");
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <Accordion
        header={
          <h2 className={clsx("text-[1.5rem] text-[#2222224D] font-medium")}>
            {dictionaries.kanji.title}
          </h2>
        }
      >
        <div
          className={clsx(
            "grid grid-cols-1 place-items-start place-content-start gap-[20px]",
            "w-full",
            "overflow-auto"
          )}
        >
          {state.kanji.category.items.map((item, itemIndex) => {
            const params = new URLSearchParams({
              level: level?.toString() ?? "",
              id: item.id,
            });
            return (
              <Link
                className={clsx(
                  "grid grid-cols-1 place-content-center place-items-center gap-[1rem]",
                  "w-full"
                )}
                key={itemIndex}
                href={AppCollectionURL.public.kanji(params.toString())}
              >
                <div
                  className={clsx(
                    "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[1rem]",
                    "w-full"
                  )}
                >
                  <KanjiItem kanji={item.name} />
                  <span className={clsx("text-[black]")}>
                    {item.description}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Accordion>
    </div>
  );
};
