import React from "react";

import Link from "next/link";
import Image from "next/image";
import { getMovieById, getSimilarMovies } from "@/app/api/get-movies/route";
import { id } from "postcss-selector-parser";
import { Genre, Movie } from "@/types";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  if (!id) {
    return <div>něco se nepovedlo</div>;
  }

  const data = await getMovieById(id);
  const similar = (await getSimilarMovies(id)) as Movie[];

  return (
    <div className="min-h-screen w-full flex flex-col container gap-2 items-center  ">
      {/*movie player*/}
      <div className="bg-black w-full  aspect-video "></div>
      {/*desc*/}
      <div className="w-full h-fit flex flex-col text-center max-w-[700px] gap-2 pb-6">
        <h1 className="text-xl md:text-2xl">{data.title}</h1>
        <div className="flex mx-auto gap-2">
          {data.genres.map((item: Genre) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
        <p className="text-sm md:text-lg">{data.overview}</p>
      </div>
      {/*similar movies*/}
      <div className="grid grid-cols-2 min-[520px]:grid-cols-3 md:grid-cols-4 items-center justify-items-center w-full gap-2 mb-4">
        {similar.slice(0, 8).map((item) => (
          <Link
            key={item.id}
            href={`${item.id}`}
            className={` aspect-[3/4] min-h-[150px] w-[80%] md:w-[90%] overflow-clip relative items-center flex justify-center`}
          >
            {item.poster_path ? (
              <img
                src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
                width={200}
                height={50}
                className="object-contain w-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                <Image
                  src="/icons/no-image.svg"
                  alt="no-image"
                  width={200}
                  height={200}
                />
              </div>
            )}

            <p className="absolute text-white bottom-2 bg-orange-light/95 max-w-[90%] px-2 py-1 rounded-md flex text-center">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
