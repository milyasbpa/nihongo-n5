"use client";
import * as React from "react";
import clsx from "clsx";
import { ProgressVocabulary } from "../fragments/progress";
import { QuestionVocabulary } from "../fragments/question";
import { AnswerVocabulary } from "../fragments/answer";
import { KanjiContext } from "../context";
import { FinishVocabulary } from "../fragments/finish";

export const KanjiContainer = () => {
  const { state } = React.useContext(KanjiContext);
  return (
    <React.Suspense>
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
          "w-full"
        )}
      >
        {state.question.selected !== state.question.data.length ? (
          <>
            <ProgressVocabulary />
            <QuestionVocabulary />
            <AnswerVocabulary />
          </>
        ) : (
          <FinishVocabulary />
        )}
      </div>
    </React.Suspense>
  );
};
