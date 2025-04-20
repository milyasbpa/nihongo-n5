"use client";
import * as React from "react";
import clsx from "clsx";
import SVGIcon from "@/core/icons";
import { motion } from "framer-motion";

export interface AccordionProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

export const Accordion = ({ header = "", children = "" }: AccordionProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const handleClickAccordionButton = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start",
        isOpen ? "gap-[0.75rem]" : "gap-[0rem]",
        "w-full"
      )}
    >
      <button
        className={clsx(
          "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0rem]",
          "w-full",
          "cursor-pointer"
        )}
        onClick={handleClickAccordionButton}
      >
        <span className={clsx("text-[#232323] text-[1.125rem] font-bold")}>
          {header}
        </span>
        <SVGIcon
          name={isOpen ? "ChevronUp" : "ChevronDown"}
          className={clsx("w-[1.5rem] h-[1.5rem]", "text-[#232323]")}
        />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={clsx("text-[#767676] text-[0.875rem] font-normal", "w-full")}
      >
        {children}
      </motion.div>
    </div>
  );
};
