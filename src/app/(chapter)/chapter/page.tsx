import { ChapterProvider } from "@/features/chapter/context";
import { ChapterContainer } from "@/features/chapter/container";

export default function Home() {
  return (
    <ChapterProvider>
      <ChapterContainer />
    </ChapterProvider>
  );
}
