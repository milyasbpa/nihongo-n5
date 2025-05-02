import { ChapterProvider, initialState } from "@/features/chapter/context";
import { ChapterContainer } from "@/features/chapter/container";
import { Suspense } from "react";
import { fetchGetVocabularyCategoryList } from "@/core/services/rest/jlpt/vocabulary";
import {
  GetVocabularyCategoryListPayloadRequestInterface,
  GetVocabularyCategoryListSuccessResponseInterface,
} from "@/core/models/rest/jlpt/vocabulary";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ level?: string }>;
  params: Promise<{ level: string }>;
}) {
  const query = await searchParams;

  const payload: GetVocabularyCategoryListPayloadRequestInterface = {
    params: {
      level: query.level ?? "",
    },
  };
  let state = initialState;
  try {
    const res = await fetchGetVocabularyCategoryList(payload);
    if (!!res) {
      const data = res as GetVocabularyCategoryListSuccessResponseInterface;
      state = {
        ...state,
        vocabulary: {
          ...state.vocabulary,
          category: {
            ...state.vocabulary.category,
            items:
              data.data?.map((item) => {
                return {
                  id: item.id,
                  name: item["id-ID"],
                };
              }) ?? [],
          },
        },
      };
    }
  } catch (err) {
    console.log(err?.toString());
  }

  return (
    <ChapterProvider initialState={state}>
      <Suspense>
        <ChapterContainer />
      </Suspense>
    </ChapterProvider>
  );
}
