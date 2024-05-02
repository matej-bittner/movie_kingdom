"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types";

const Slider = ({ trendingMovies }: { trendingMovies: Movie[] }) => {
  const [currentMovie, setCurrentMovie] = useState(0);
  let movie = Object(trendingMovies[currentMovie]);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentMovie((prevState) =>
          prevState === trendingMovies.length - 1 ? 0 : prevState + 1,
        ),
      3000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <Link
      href={`movie/${movie.id}`}
      className="xl:max-w-[1440px] h-[280px] lg:h-[390px] xl:h-[550px]  w-full  bg-orange-dark flex p-2 md:py-8 sm:px-5 mx-auto justify-center sm:justify-end md:justify-center items-end relative"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="aa"
        fill
        className="object-cover object-center"
      />
      <div className="z-10 flex flex-col gap-2 xl:gap-4 items-center justify-center">
        <h1 className=" text-white text-2xl sm:text-3xl lg:text-4xl items-center font-nunito">
          {movie.title}
        </h1>
        <p className="bg-black/90 text-white px-2 py-1 md:px-3 md:py-2 xl:px-6 text-lg lg:text-xl xl:text-2xl font-semibold border-white border-2 cursor-pointer hover:scale-105 transition">
          Watch Now
        </p>
      </div>
    </Link>
  );
};

export default Slider;
