/** fetch search result params  */
export type TGiphySearchParams = {
  keyword: string;
};
/** fetch favorite params */
export type TFetchFavoritesParams = {
  ids: string[];
};

/** gifs list components props */
export type TGifsResultContainer = {
  keyword?: string;
  handleFetch: any;
};
