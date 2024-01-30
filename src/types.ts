import { TAB_SEARCH, TAB_FAVORITE } from './constants';

export type TTab = typeof TAB_SEARCH | typeof TAB_FAVORITE;
export type TIsSearchTab = {
  isSearchTab: boolean;
  currentTab: TTab;
};
