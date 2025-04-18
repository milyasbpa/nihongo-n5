import * as React from "react";
import clsx from "clsx";

export interface LevelCardHomeProps {
  image_url?: string;
  title?: string;
  background?: string;
  color?: string;
  borderColor?: string;
}

export const LevelCardHome = ({
  image_url = "",
  title = "",
  background = "",
  color = "",
  borderColor = "",
}: LevelCardHomeProps) => {
  return (
    <div
      className={clsx(
        "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
        "w-full",
        "shadow-lg",
        "rounded-2xl overflow-hidden",
        // "bg-green-100",
        "border",
        borderColor,
        background
      )}
    >
      <img
        src={image_url}
        alt="JLPT N5 Ilustrasi"
        className="aspect-square h-full object-cover"
      />
      <div className="p-4">
        <h2 className={clsx("text-xl font-bold mb-2", color)}>{title}</h2>

        <div className={clsx("grid grid-cols-3 text-center text-sm ", color)}>
          <div>
            <p className="font-semibold">Kosakata</p>
            <p>~800</p>
          </div>
          <div>
            <p className="font-semibold">Kanji</p>
            <p>~100</p>
          </div>
          <div>
            <p className="font-semibold">Grammar</p>
            <p>Dasar</p>
          </div>
        </div>
      </div>
    </div>
  );
};
