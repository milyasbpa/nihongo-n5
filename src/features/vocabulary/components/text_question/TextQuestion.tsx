import * as React from "react";
import clsx from "clsx";

export interface TextQuestionProps {
  text?: string;
}

export const TextQuestion = ({ text = "" }: TextQuestionProps) => {
  return (
    <div
      className={clsx(
        "grid grid-flow-col place-content-center place-items-center gap-[1rem]",
        "w-full min-h-[200px]"
      )}
    >
      <button className={clsx("text-[2rem] text-[black] font-semibold")}>
        {text}
      </button>
    </div>
  );
};
