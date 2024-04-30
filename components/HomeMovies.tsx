import React from "react";
import MovieBox from "@/components/MovieBox";
import { getPopularMovies } from "@/app/api/get-movies/route";

const HomeMovies = async () => {
  const popularMovies = await getPopularMovies();

  return (
    <div className="grid grid-cols-2 min-[580px]:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 md:justify-items-center  gap-2 md:gap-3 xl:gap-6 container">
      {popularMovies.slice(0, 12).map((movie: any, index: number) => (
        <MovieBox key={index} movie={movie} index={index + 1} />
      ))}
    </div>
  );
};

export default HomeMovies;
