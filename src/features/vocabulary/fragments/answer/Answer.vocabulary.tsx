"use client";
import * as React from "react";
import clsx from "clsx";
import { VocabularyContext } from "../../context";

export const AnswerVocabulary = () => {
  const { state } = React.useContext(VocabularyContext);
  if (state.question.selected === null) {
    return null;
  }
  return (
    <div
      className={clsx(
        "grid grid-cols-2 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      {state.question.data
        .find((_, index) => index === state.question.selected)
        ?.options.map((option, optionIndex) => (
          <button
            key={optionIndex}
            className={clsx(
              "grid grid-cols-1 place-content-center place-items-center",
              "py-[0.875rem]",
              "w-full",
              "text-[1rem] text-[#222222] font-semibold",
              "bg-[white]",
              "border border-[#222222]",
              "rounded-[0.5rem]",
              "capitalize"
            )}
          >
            {option.text}
          </button>
        ))}
    </div>
  );
};
