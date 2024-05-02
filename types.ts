export type Genre = {
  id: number;
  name: string;
};
export type Params = {
  page: string;
  year?: string;
  genre?: string;
  search?: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: string;
};
