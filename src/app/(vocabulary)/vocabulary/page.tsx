import { VocabularyProvider } from "@/features/vocabulary/context";
import { VocabularyContainer } from "@/features/vocabulary/container";

export default function VocabularyPage() {
  return (
    <VocabularyProvider>
      <VocabularyContainer />
    </VocabularyProvider>
  );
}
