import {
  HomeActionEnum,
  HomeActions,
  HomeLevel,
  HomeVocabulary,
} from "./Home.types";

// Level
export const HomeLevelReducers = (state: HomeLevel, action: HomeActions) => {
  switch (action.type) {
    case HomeActionEnum.SetLevelData:
      return action.payload;

    default:
      return state;
  }
};

// Vocabulary
export const HomeVocabularyReducers = (
  state: HomeVocabulary,
  action: HomeActions
) => {
  switch (action.type) {
    case HomeActionEnum.SetVocabularyData:
      return action.payload;

    default:
      return state;
  }
};
