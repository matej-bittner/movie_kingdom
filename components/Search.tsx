"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDebounce } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = ({ searchMovie }: any) => {
  const [searchInput, setSearchInput] = useState<string>("");
  // const [debouncedText] = useDebounce(searchInput, 600);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.getAll("page"));
  const year = Number(searchParams.getAll("year"));
  const genre = Number(searchParams.getAll("genre"));

  useEffect(() => {
    let url;

    if (pathname === "/") {
      url = "?";
      router.push(`${url}search=${searchInput}`);
      if (searchInput === "") router.push(url);
      if (searchInput === undefined) router.push(url);
    }

    if (pathname !== "/") {
      url = `${pathname}${page ? `?page=${page}` : ""}${year > 1950 ? `&year=${year}` : ""}${genre ? `&genre=${genre}` : ""}`;
      router.push(`${url}&search=${searchInput}`);
      if (searchInput === "") router.push(url);
      if (searchInput === undefined) router.push(url);
    }
  }, [searchInput]);

  return (
    <div className="bg-orange-light w-[220px] h-[35px] rounded-xl flex  justify-between px-2 border-2 border-black relative">
      <input
        type="text"
        className=" outline-none flex items-center  w-[170px] bg-transparent placeholder:text-black"
        placeholder="search"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Image
        src="/icons/search.svg"
        alt="search"
        className="pr-1"
        width={37}
        height={20}
      />

      {searchMovie !== undefined && (
        <div className="absolute w-[300px] h-fit right-0 top-full pt-2 flex flex-col gap-2 z-10">
          {searchMovie.map((item: any) => (
            <Link
              key={item.id}
              href={`/movie/${item.id}`}
              className="w-full h-[70px] bg-[#FBE9B3] border-black border-[2px] rounded-md overflow-clip flex hover:bg-orange-light transition-colors duration-200 ease-in-out "
            >
              {item.poster_path ? (
                <img
                  src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                  className="h-full aspect-[5/7] object-center object-fill"
                />
              ) : (
                <img
                  src="/icons/no-image.svg"
                  alt={item.title}
                  className="h-full aspect-[5/7] object-center object-fill"
                />
              )}
              <div className="flex-1 text-center items-center justify-center flex flex-col">
                <p>{item.title}</p>
                <p>{item.release_date.split("-")[0]}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
