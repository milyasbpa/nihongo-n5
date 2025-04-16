"use client";
import * as React from "react";
import clsx from "clsx";
import { VocabularyContext } from "../../context";
import SVGIcon from "@/core/icons";
import { useGetQuestionList } from "../../react_query/hooks";

export const QuestionVocabulary = () => {
  const { state } = React.useContext(VocabularyContext);
  useGetQuestionList();
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Attach event listener safely
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioRef.current]);

  if (state.question.selected === null) {
    return null;
  }

  const handlePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
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
        <h1 className={clsx("text-[black] text-[1.25rem] font-bold text-center")}>
          {state.question.data[state.question.selected].prompt.text}
        </h1>
      </div>

      <div
        className={clsx(
          "grid grid-flow-col place-content-center place-items-center gap-[1rem]",
          "w-full min-h-[200px]"
        )}
      >
        <button onClick={handlePlay}>
          <SVGIcon
            name="Play"
            className={clsx("w-[2rem] h-[2rem]", "text-[black]")}
          />
        </button>
        <div className="flex gap-[4px] h-6 items-end">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className={`w-[4px] bg-black rounded-full ${
                isPlaying ? "animate-duowave" : ""
              }`}
              style={{
                height: "100%",
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in-out",
              }}
            />
          ))}
        </div>

        <audio
          ref={audioRef}
          src={state.question.data[state.question.selected].prompt.voice_url}
          preload="auto"
        />
      </div>
    </div>
  );
};
