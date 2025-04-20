"use client";
import * as React from "react";
import clsx from "clsx";
import SVGIcon from "@/core/icons";
import { KanjiContext } from "../../context";
import Link from "next/link";
import { AppCollectionURL } from "@/core/utils/router/constants/app";
import { useSearchParams } from "next/navigation";

export const ProgressVocabulary = () => {
  const { state } = React.useContext(KanjiContext);
  const searchParams = useSearchParams();
  const level = searchParams.get("level");

  const params = new URLSearchParams({
    level: level?.toString() ?? "",
  });
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

      <div
        className={clsx(
          "w-full h-[1rem]",
          "rounded-[0.5rem]",
          "border border-[red]"
        )}
      >
        <div
          className={clsx("h-[1rem]", "rounded-[0.5rem]")}
          style={{
            background:
              "radial-gradient(103.95% 1413.54% at -3.95% 100%, #D33753 0%, #D13660 52.83%, #C72D65 100%)",
            width: `${
              ((state.question.selected ?? 0) / state.question.data.length) *
              100
            }%`,
          }}
        ></div>
      </div>
    </div>
  );
};
