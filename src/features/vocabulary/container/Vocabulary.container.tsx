import * as React from "react";
import clsx from "clsx";
import { ProgressVocabulary } from "../fragments/progress";
import { QuestionVocabulary } from "../fragments/question";
import { AnswerVocabulary } from "../fragments/answer";

export const VocabularyContainer = () => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <ProgressVocabulary />
      <QuestionVocabulary />
      <AnswerVocabulary />
    </div>
  );
};
