export const AppCollectionURL = {
  public: {
    level: () => "/",
    chapter: (params: string) => `/chapter?${params}`,
  },
};
