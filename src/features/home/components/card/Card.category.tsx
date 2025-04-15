import * as React from "react";
import clsx from "clsx";

export interface CardLevelProps {
  name?: string;
  description?: string;
}

export const CardLevel = ({ name = "", description = "" }: CardLevelProps) => {
  return (
    <div
      className={clsx("bg-[#2C2C2C] text-white rounded-2xl shadow-md p-6 w-64")}
    >
      <div
        className={clsx(
          "text-[#78C800] text-sm font-semibold mb-2 uppercase tracking-wider"
        )}
      >
        {description}
      </div>
      <div className={clsx("text-3xl font-bold text-white")}>{name}</div>
    </div>
  );
};
