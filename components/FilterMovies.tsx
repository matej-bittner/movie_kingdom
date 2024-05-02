import React from "react";
import Link from "next/link";
import { getGenres } from "@/app/api/get-genres/route";
import { years } from "@/constants";
import { Genre } from "@/types";

const Filter = async ({ year, genre }: { year: number; genre: number }) => {
  const genres = (await getGenres()) as Genre[];

  return (
    <div className="w-full max-w-[500px] lg:max-w-[700px] h-fit flex items-center justify-around py-3 ">
      <div className="relative w-[120px] sm:w-[150px] lg:w-[200px]">
        <button className="peer bg-orange-light hover:bg-orange-semiLight text-gray-800 text-lg w-full py-1 font-semibold font-nunito transition duration-100 ease-linear">
          Genre
        </button>
        <div className="absolute hidden hover:flex peer-hover:flex flex-col w-full gap-1 items-center pt-1 max-h-[300px] overflow-auto z-10">
          {genres.map((item) => (
            <Link
              key={item.id}
              href={`?page=1${year > 1950 ? `&year=${year}` : ""}&genre=${item.id}`}
              className="bg-gray-50/70 hover:bg-gray-100/70 w-full text-center py-1"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="relative w-[120px] sm:w-[150px] lg:w-[200px]">
        <button className="peer bg-orange-light hover:bg-orange-semiLight text-gray-800 text-lg w-full py-1 font-semibold font-nunito transition duration-100 ease-linear">
          Year
        </button>
        <div className="absolute hidden hover:flex peer-hover:flex flex-col w-full gap-1 items-center pt-1 max-h-[300px] overflow-auto z-10">
          {years.reverse().map((item) => (
            <Link
              key={item.year}
              href={`?page=1&year=${item.year}${genre === undefined ? "" : `&genre=${genre}`}`}
              className="bg-gray-50/70 hover:bg-gray-100/70 w-full text-center py-1"
            >
              {item.year}
            </Link>
          ))}
        </div>
      </div>
      {year > 1 ? (
        <Link href="?page=1">Clear filters</Link>
      ) : (
        genre > 1 && <Link href="?page=1">Clear filters</Link>
      )}
    </div>
  );
};

export default Filter;
