import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import Image from "next/image";

export const FinishVocabulary = () => {
  const dictionaries = getDictionaries();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-center place-items-center gap-[1rem]",
        "w-full"
      )}
    >
      <Image
        {...dictionaries.finish.illustration}
        className={clsx("w-[240px] h-[240px]")}
      />
      <p>{dictionaries.finish.message}</p>
    </div>
  );
};
