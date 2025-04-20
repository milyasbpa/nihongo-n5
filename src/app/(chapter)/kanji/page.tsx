import { KanjiProvider } from "@/features/kanji/context";
import { KanjiContainer } from "@/features/kanji/container";

export default function VocabularyPage() {
  return (
    <KanjiProvider>
      <KanjiContainer />
    </KanjiProvider>
  );
}
