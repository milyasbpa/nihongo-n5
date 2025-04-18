"use client";
import * as React from "react";
import clsx from "clsx";
import {
  QuestionWithCorrect,
  VocabularyActionEnum,
  VocabularyContext,
} from "../../context";
import { QuestionListOptions } from "@/api/vocabulary/dto/question_list.get";

export const AnswerVocabulary = () => {
  const { state, dispatch } = React.useContext(VocabularyContext);
  const selectedIndex = state.question.selected;
  if (selectedIndex === null) {
    return null;
  }

  const handleClickAnswerButton = (
    answer: QuestionListOptions,
    question: QuestionWithCorrect
  ) => {
    dispatch({
      type: VocabularyActionEnum.SetQuestionData,
      payload: {
        ...state.question,
        selected:
          answer.id === question.prompt.id
            ? (state.question.selected ?? 0) + 1
            : state.question.selected,
        data: state.question.data.map((item) => {
          return {
            ...item,
            answers:
              question.id === item.id
                ? [...item.answers, answer.id]
                : item.answers,
            correct:
              question.id === item.id && answer.id === question.prompt.id,
          };
        }),
      },
    });
  };
  return (
    <div
      className={clsx(
        "grid grid-cols-2 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      {state.question.data[selectedIndex].options.map((option, optionIndex) => (
        <button
          key={optionIndex}
          className={clsx(
            "grid grid-cols-1 place-content-center place-items-center",
            "py-[0.875rem]",
            "w-full",
            "text-[1rem] text-[#222222] font-semibold",
            state.question.data[selectedIndex].answers.includes(option.id) &&
              option.id !== state.question.data[selectedIndex].prompt.id
              ? "bg-[red]"
              : "bg-[white]",
            "border border-[#222222]",
            "rounded-[0.5rem]",
            "capitalize"
          )}
          onClick={() =>
            handleClickAnswerButton(option, state.question.data[selectedIndex])
          }
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};
