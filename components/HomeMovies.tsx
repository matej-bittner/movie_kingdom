import React from "react";
import MovieBox from "@/components/MovieBox";
import { getPopularMovies } from "@/app/api/get-movies/route";
import { Movie } from "@/types";

const HomeMovies = async () => {
  const popularMovies = (await getPopularMovies()) as Movie[];

  return (
    <div className="grid grid-cols-2 min-[580px]:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 md:justify-items-center  gap-2 md:gap-3 xl:gap-6 container">
      {popularMovies.slice(0, 12).map((movie, index: number) => (
        <MovieBox key={index} movie={movie} index={index + 1} />
      ))}
    </div>
  );
};

export default HomeMovies;
