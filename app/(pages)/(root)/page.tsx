import React from "react";

import Slider from "@/components/Slider";

import Link from "next/link";
import HomeMovies from "@/components/HomeMovies";
import { getTrendingMovies } from "@/app/api/get-movies/route";

const Home = async () => {
  const trendingMovies = await getTrendingMovies();

  return (
    <section className="flex flex-col gap-4  mb-3">
      <Slider trendingMovies={trendingMovies} />
      <>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] font-nunito font-semibold max-lg:italic mx-auto underline underline-offset-4">
          FAVOURITE MOVIES
        </h1>
        <HomeMovies />
      </>
      <Link
        className="mx-auto px-4 py-1 text-white bg-orange-light rounded-md text-lg md:text-xl lg:text-2xl "
        href="/all-movies?page=1"
      >
        Show More
      </Link>
    </section>
  );
};

export default Home;
