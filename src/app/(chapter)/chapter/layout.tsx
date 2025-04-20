import clsx from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chapter",
};

type HomeLayoutProps = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main
      className={clsx(
        "grid grid-rows-1 grid-cols-1 place-content-start place-items-start",
        "w-full h-full min-h-[100vh]",
        "relative",
        "px-[1rem] py-[1rem]"
      )}
    >
      {children}
    </main>
  );
}
