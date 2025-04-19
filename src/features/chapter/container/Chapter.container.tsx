import * as React from "react";
import clsx from "clsx";
import { VocabularyChapter } from "../fragments/vocabulary";

export const ChapterContainer = () => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <VocabularyChapter />
    </div>
  );
};
