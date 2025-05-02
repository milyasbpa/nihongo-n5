import { initialState, KanjiProvider } from "@/features/kanji/context";
import { KanjiContainer } from "@/features/kanji/container";
import { getKanjiQuestionList } from "@/features/kanji/server/actions/getKanjiQuestionList";

export default async function VocabularyPage({
  searchParams,
}: {
  searchParams: Promise<{ level?: string; id?: string }>;
}) {
  const query = await searchParams;
  let state = initialState;

  try {
    const data = await getKanjiQuestionList({
      level: query.level ?? "",
      kanji_id: query.id ?? "",
    });
    state = {
      ...state,
      question: {
        ...state.question,
        selected: !data.length ? null : 0,
        data:
          data.map((item) => {
            return {
              ...item,
              correct: false,
              answers: [],
            };
          }) ?? [],
      },
    };
  } catch (err) {
    console.log(err?.toString());
  }
  return (
    <KanjiProvider state={state}>
      <KanjiContainer />
    </KanjiProvider>
  );
}
