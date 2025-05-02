import * as React from "react";
import clsx from "clsx";
import { VocabularyChapter } from "../fragments/vocabulary";
import SVGIcon from "@/core/icons";
import Link from "next/link";
import { AppCollectionURL } from "@/core/utils/router/constants/app";
import { KanjiChapter } from "../fragments/kanji";
import { Accordion } from "@/components/ui/accordion";

export const ChapterContainer = () => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <Link
        href={AppCollectionURL.public.level()}
        className={clsx(
          "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
          "w-full"
        )}
      >
        <SVGIcon name="ChevronLeft" />
        {"Back"}
      </Link>

      <Accordion
        type="single"
        collapsible
        defaultValue="kanji"
        className="w-full"
      >
        <KanjiChapter />
        <VocabularyChapter />
      </Accordion>
    </div>
  );
};
