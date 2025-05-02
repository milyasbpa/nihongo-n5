"use client";
import * as React from "react";
import clsx from "clsx";
import SVGIcon from "@/core/icons";
import { KanjiContext } from "../../context";
import Link from "next/link";
import { AppCollectionURL } from "@/core/utils/router/constants/app";
import { useSearchParams } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export const ProgressVocabulary = () => {
  const { state } = React.useContext(KanjiContext);
  const searchParams = useSearchParams();
  const level = searchParams.get("level");

  const params = new URLSearchParams({
    level: level?.toString() ?? "",
  });

  const progress =
    ((state.question.selected ?? 0) / state.question.data.length) * 100;
  console.log(progress, "ini progress");
  return (
    <div
      className={clsx(
        "grid grid-cols-[auto_1fr] items-center content-center justify-start justify-items-start gap-[0.5rem]",
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
    </div>
  );
};
