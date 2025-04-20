import * as React from "react";
import clsx from "clsx";

export interface AudioWaveProps {
  isPlaying?: boolean;
}

export const AudioWave = ({ isPlaying = false }: AudioWaveProps) => {
  return (
    <div className={clsx("flex gap-[4px] h-6 items-end")}>
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
  );
};
