import { ChapterProvider } from "@/features/chapter/context";
import { ChapterContainer } from "@/features/chapter/container";
import { Suspense } from "react";

export default function Home() {
  return (
    <ChapterProvider>
      <Suspense>
        <ChapterContainer />
      </Suspense>
    </ChapterProvider>
  );
}
