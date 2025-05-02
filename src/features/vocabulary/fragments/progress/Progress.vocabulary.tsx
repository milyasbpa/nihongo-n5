"use client";
import * as React from "react";
import clsx from "clsx";
import SVGIcon from "@/core/icons";
import { VocabularyActionEnum, VocabularyContext } from "../../context";
import Link from "next/link";
import { AppCollectionURL } from "@/core/utils/router/constants/app";
import { useSearchParams } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export const ProgressVocabulary = () => {
  const { state, dispatch } = React.useContext(VocabularyContext);
  const searchParams = useSearchParams();
  const level = searchParams.get("level");

  const params = new URLSearchParams({
    level: level?.toString() ?? "",
  });

  const handleClickSetting = () => {
    dispatch({
      type: VocabularyActionEnum.SetQuestionData,
      payload: {
        ...state.question,
        settings: {
          ...state.question.settings,
          is_open: true,
        },
      },
    });
  };
  const progress =
    ((state.question.selected ?? 0) / state.question.data.length) * 100;

  return (
    <div
      className={clsx(
        "grid grid-cols-[auto_1fr_auto] items-center content-center justify-start justify-items-start gap-[0.5rem]",
        "w-full"
      )}
    >
      <Link href={AppCollectionURL.public.chapter(params.toString())}>
        <SVGIcon
          name="X"
          className={clsx("w-[1.5rem] h-[1.5rem]", "text-[black]")}
        />
      </Link>

      <Progress value={progress} />

      <button onClick={handleClickSetting}>
        <SVGIcon
          name="Settings2"
          className={clsx("w-[1.5rem] h-[1.5rem]", "text-[black]")}
        />
      </button>
    </div>
  );
};
