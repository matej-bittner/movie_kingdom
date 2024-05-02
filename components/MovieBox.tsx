"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { Movie } from "@/types";

const MovieBox = ({ movie, index }: { movie: Movie; index: number }) => {
  const [openInfo, setOpenInfo] = useState(false);
  const [width, setWidth] = useState(0);
  let x = false;
  if (
    index === 3 ||
    index === 4 ||
    index === 7 ||
    index === 8 ||
    index === 11 ||
    index === 12 ||
    index === 15 ||
    index === 16 ||
    index === 19 ||
    index === 20
  ) {
    x = true;
  }
  const infoRef = useRef<HTMLInputElement>(null);

  // Add and remove event listener in useEffect
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        infoRef.current &&
        !infoRef.current.contains(event.target) &&
        width >= 1024
      ) {
        setOpenInfo(false); // Close the component if clicked outside
      }
    };
    if (openInfo) {
      // Only add listener when component is open
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openInfo]);

  useEffect(() => {
    setWidth(window.innerWidth);
    if (window.innerWidth >= 1024) setOpenInfo(false);

    if (window.innerWidth < 1024) setOpenInfo(true);
  }, [width]);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth >= 1024) setOpenInfo(false);

      if (window.innerWidth < 1024) setOpenInfo(true);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/*max md*/}
      <Link href={`/movie/${movie.id}`} className="md:hidden">
        <div className=" h-fit min-h-[305px] bg-[#f2f2f2] flex flex-col items-center  p-2">
          {movie.poster_path ? (
            <Image
              // src="/images/fast.png"
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width="100"
              height="100"
              className="w-[150px] h-[210px] object-cover overflow-clip"
            />
          ) : (
            <div className="w-[150px] h-[210px] bg-gray-50 flex items-center justify-center relative">
              <Image
                src="/icons/no-image.svg"
                alt="no-image"
                fill
                className="object-fill overflow-clip"
              />
            </div>
          )}

          <div className="flex flex-col flex-1 items-center justify-center text-center">
            <h2>{movie.title}</h2>
          </div>
        </div>
      </Link>
      {/*md content*/}
      <div className="hidden md:flex items-center relative ">
        {movie.poster_path ? (
          <Image
            onClick={width >= 1024 ? () => setOpenInfo(!openInfo) : () => {}}
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width="100"
            height="100"
            className="w-[160px] h-[226px] lg:w-[230px] lg:h-[287px] xl:w-[260px] xl:h-[325px] object-cover lg:cursor-pointer "
          />
        ) : (
          <div className="w-[160px] h-[226px] lg:w-[230px] lg:h-[287px] xl:w-[260px] xl:h-[325px] object-cover lg:cursor-pointer flex items-center justify-center bg-gray-50">
            <Image
              src="/icons/no-image.svg"
              alt="no-image"
              width={200}
              height={200}
              className=""
            />
          </div>
        )}

        <div
          onClick={width >= 1024 ? () => setOpenInfo(!openInfo) : () => {}}
          className="hidden cursor-pointer lg:flex items-end justify-center absolute w-[230px] xl:w-[260px] h-[130px]   bottom-0 bg-gradient-to-b from-transparent via-70% via-orange-dark/70 to-orange-dark"
        >
          <p className="min-w-[120px] max-w-[90%] text-center min-h-[33px] px-2 flex items-center justify-center text-white rounded-md bg-orange-light/50 mb-[20px] text-xl">
            {movie.title}
          </p>
        </div>
        {openInfo && (
          <div
            ref={infoRef}
            className={`flex flex-col min-h-[240px] items-center justify-between text-center px-2
              lg:absolute ${x ? "lg:right-full" : "lg:left-full"} lg:z-10 lg:bg-white lg:border-2 border-orange-light lg:h-full lg:w-[260px] xl:w-[702px] lg:p-[20px]`}
          >
            <IoClose
              onClick={() => setOpenInfo(!openInfo)}
              className="hidden lg:block absolute z-10 top-1 right-1 cursor-pointer"
              size={35}
            />
            <h2 className="lg:text-xl max-w-[250px]">{movie.title}</h2>

            <article className="max-w-[250px] xl:max-w-[480px] gap-2 flex flex-col">
              <p className="text-sm font-light italic">
                Comedy / Animated / Action
              </p>
              <p className="text-xs lg:text-sm ">
                {movie.overview.length > 150
                  ? `${movie.overview.substring(0, 150)}...`
                  : movie.overview}
              </p>
            </article>
            <div className="xl:flex xl:flex-row-reverse xl:w-[480px] xl:justify-between ">
              <p className="w-[120px] h-[30px] flex items-center justify-center text-white rounded-md bg-orange-dark">
                IMDb: 9.7
              </p>
              <p className="w-fit px-2 h-[30px] hidden  xl:flex items-center justify-center text-white rounded-md bg-orange-dark">
                Released: {movie.release_date}
              </p>
            </div>
            <Link
              href={`/movie/${movie.id}`}
              className="rounded-lg w-[120px] h-[37px] text-xl flex items-center justify-center bg-orange-light hover:bg-orange-semiLight transition-colors duration-200 ease-linear"
            >
              Watch
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieBox;
