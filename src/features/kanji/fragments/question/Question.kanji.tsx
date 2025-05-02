"use client";
import * as React from "react";
import clsx from "clsx";
import { KanjiContext } from "../../context";

export const QuestionKanji = () => {
  const { state } = React.useContext(KanjiContext);

  if (state.question.selected === null) {
    return null;
  }

  const questionText =
    state.question.data[state.question.selected].prompt.example;
  const handleClickQuestion = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    speechSynthesis.speak(utterance);
  };
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full min-h-[200px]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center gap-[1rem]",
          "w-full"
        )}
      >
        <h1
          className={clsx("text-[black] text-[1.25rem] font-bold text-center")}
        >
          {state.question.data[state.question.selected].prompt.text}
        </h1>

        <div
          className={clsx(
            "grid grid-cols-1 place-content-center place-items-center gap-[0.5rem]",
            "w-full"
          )}
        >
          <button
            className={clsx("text-[black] text-[4rem] font-bold text-center")}
            onClick={() => handleClickQuestion(questionText)}
          >
            {questionText}
          </button>
          <p
            className={clsx(
              "text-[black] text-[1rem] font-normal text-center"
            )}
          >
            {state.question.data[state.question.selected].prompt["en-US"]}
          </p>
        </div>
      </div>
    </div>
  );
};
