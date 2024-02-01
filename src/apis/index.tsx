import { GiphyFetch } from '@giphy/js-fetch-api';
import { TGiphySearchParams, TFetchFavoritesParams } from '../types';

const limit = 10;
const apiKey = 'IGLOYrMAV8KRjzGzj6vvF3dGx2WlASHZ';
const gf = new GiphyFetch(apiKey);

/** Search page: fetch gifs by keyword */
export const fetchSearchGifs = ({ keyword }: TGiphySearchParams) => {
  return (offset: number) => gf.search(keyword, { offset, limit });
};

/** Favorites page: fetch gifs by ids */
export const fetchFavoritesGifs = ({ ids }: TFetchFavoritesParams) => {
  return () => gf.gifs(ids);
};
