import * as React from "react";
import clsx from "clsx";
import { LevelHome } from "../fragments/level";
import Image from "next/image";
import { getDictionaries } from "../i18n";
import { VocabularyHome } from "../fragments/vocabulary";

export const HomeContainer = () => {
  const dictionaries = getDictionaries();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <div>
        <Image
          {...dictionaries.flag}
          className={clsx(
            "w-[2rem] h-[2rem]",
            "rounded-[50%]",
            "border border-[#DDDDDD]"
          )}
        />
      </div>
      <LevelHome />
      <VocabularyHome />
    </div>
  );
};
