import * as React from "react";
import clsx from "clsx";
import { LevelHome } from "../fragments/level";
import { VocabularyHome } from "../fragments/vocabulary";

export const HomeContainer = () => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <LevelHome />

      <VocabularyHome />
    </div>
  );
};
