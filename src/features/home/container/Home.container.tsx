import * as React from "react";
import clsx from "clsx";
import { LevelHome } from "../fragments/level";
import Image from "next/image";
import { getDictionaries } from "../i18n";

export const HomeContainer = () => {
  const dictionaries = getDictionaries();
  return (
    <div className={clsx("w-full")}>
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
    </div>
  );
};
