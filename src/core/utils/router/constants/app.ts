export const AppCollectionURL = {
  public: {
    level: () => "/",
    chapter: (params: string) => `/chapter?${params}`,
    vocabulary: (params: string) => `/vocabulary?${params}`,
    kanji: (params: string) => `/kanji?${params}`,
  },
};
