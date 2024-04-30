import React from "react";
import PagesControl from "@/components/PagesControl";
import MovieBox from "@/components/MovieBox";
import FilterMovies from "@/components/FilterMovies";
import {
  getAllMovies,
  getPopularMovies,
  getSearchMovie,
} from "@/app/api/get-movies/route";
import { useSearchParams } from "next/navigation";
import Filter from "@/components/FilterMovies";
import Search from "@/components/Search";

const Page = async ({ searchParams }: any) => {
  const page = Number(searchParams.page);
  const year = Number(searchParams.year);
  const genre = searchParams.genre;
  const search = searchParams.search;
  const allMovies = await getAllMovies(page, year, genre);

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
      <Filter page={page} year={year} genre={genre} />
      <div className="grid grid-cols-2 min-[580px]:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 md:justify-items-center  gap-2 md:gap-3 xl:gap-6 container min-h-screen mt-4 mb-4">
        {allMovies.map((movie: any, index: number) => (
          <MovieBox key={index} movie={movie} index={index + 1} />
        ))}
      </div>
      <PagesControl />
    </section>
  );
};

export default Page;
