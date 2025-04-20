"use client";
import * as React from "react";
import clsx from "clsx";
import { KanjiContext } from "../../context";
import { useGetQuestionList } from "../../react_query/hooks";
import { KanjiQuestion } from "../../components/kanji_question";

export const QuestionVocabulary = () => {
  const { state } = React.useContext(KanjiContext);
  useGetQuestionList();

  if (state.question.selected === null) {
    return null;
  }

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
      </div>

      <KanjiQuestion kanji={"二"} />
      {/* <AudioQuestion
        voice_url={
          state.question.data[state.question.selected].prompt.voice_url
        }
      /> */}
    </div>
  );
};
