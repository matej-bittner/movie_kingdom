import React from "react";
import PagesControl from "@/components/PagesControl";
import MovieBox from "@/components/MovieBox";

import { getAllMovies, getSearchMovie } from "@/app/api/get-movies/route";

import Filter from "@/components/FilterMovies";
import Search from "@/components/Search";
import { Movie, Params } from "@/types";

const Page = async ({ searchParams }: { searchParams: Params }) => {
  const page = Number(searchParams.page);
  const year = Number(searchParams.year);
  const genre = Number(searchParams.genre);
  const search = searchParams.search;
  const allMovies = (await getAllMovies(
    page,
    year,
    searchParams.genre,
  )) as Movie[];

  let searchMovie;
  if (search && search.length > 3) {
    const replaced = search.split(" ").join("%20");
    searchMovie = await getSearchMovie(replaced);
  }

  return (
    <section
      id="allMovies"
      className="container flex flex-col items-center w-full min-h-screen scroll-mt-2 "
    >
      <div className="md:absolute md:right-6 md:top-[20px]">
        <Search searchMovie={searchMovie} />
      </div>
      <Filter year={year} genre={genre} />
      <div className="grid grid-cols-2 min-[580px]:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 md:justify-items-center  gap-2 md:gap-3 xl:gap-6 container min-h-screen mt-4 mb-4">
        {allMovies.map((movie, index: number) => (
          <MovieBox key={index} movie={movie} index={index + 1} />
        ))}
      </div>
      <PagesControl />
    </section>
  );
};

export default Page;
