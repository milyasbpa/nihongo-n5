import * as React from "react";
import clsx from "clsx";
import { ListLevel } from "../fragments/list";

export const LevelContainer = () => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <ListLevel />
    </div>
  );
};
