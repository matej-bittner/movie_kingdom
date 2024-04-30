const API_SEARCH_KEY = process.env.API_SEARCH_KEY;

async function fetchFromTMDB(url: URL) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_SEARCH_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24, //24 hours
    },
  };

  const response = await fetch(url.toString(), options);
  const data = await response.json();
  return data;
}

export async function getPopularMovies() {
  const url = new URL(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  );
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getMovieById(id: string) {
  const url = new URL(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
  );
  const data = await fetchFromTMDB(url);
  return data;
}
export async function getSimilarMovies(id: string) {
  const url = new URL(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
  );
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getAllMovies(
  page: number,
  year?: number,
  genre?: string,
) {
  const url = new URL(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}${year && `&primary_release_year=${year}`}&sort_by=popularity.desc${genre && `&with_genres=${genre}`}`,
  );

  const data = await fetchFromTMDB(url);
  return data.results;
}
export async function getTrendingMovies() {
  const url = new URL(
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
  );

  const data = await fetchFromTMDB(url);
  return data.results.slice(0, 4);
}

export async function getSearchMovie(replaced: string) {
  const url = new URL(
    `https://api.themoviedb.org/3/search/movie?query=${replaced}&include_adult=false&language=en-US&page=1`,
  );

  const data = await fetchFromTMDB(url);
  return data.results.slice(0, 4);
}
