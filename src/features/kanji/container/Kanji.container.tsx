"use client";
import * as React from "react";
import clsx from "clsx";
import { ProgressKanji } from "../fragments/progress";
import { QuestionKanji } from "../fragments/question";
import { AnswerKanji } from "../fragments/answer";
import { KanjiContext } from "../context";
import { FinishKanji } from "../fragments/finish";
import { SettingsKanji } from "../fragments/settings";

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
            <ProgressKanji />
            <QuestionKanji />
            <AnswerKanji />
          </>
        ) : (
          <FinishKanji />
        )}
      </div>
      <SettingsKanji />
    </React.Suspense>
  );
};
