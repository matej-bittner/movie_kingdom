export async function getGenres() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_SEARCH_KEY}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data.genres;
}
