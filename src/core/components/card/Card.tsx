import React, { forwardRef } from "react";
import clsx from "clsx";

export const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={clsx(
        "relative",
        "cursor-default",
        "rounded-[0.75rem]",
        "border border-[#DDDDDD]",
        "px-[1.5rem] py-[1.5rem]",
        "bg-[white]",
        "shadow-[0px 6px 16px 0px #0000001F]",
        props.className
      )}
    >
      {props.children}
    </div>
  );
});

Card.displayName = "Card";
