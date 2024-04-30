"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const PagesControl = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));
  const year = Number(searchParams.get("year"));
  const genre = Number(searchParams.get("genre"));

  const router = useRouter();

  const baseNumbers = [1, 2, 3, 4, 5];
  const [numbers, setNumbers] = useState(baseNumbers);

  useEffect(() => {
    if (page > 3) {
      setNumbers(
        baseNumbers.map((item) => {
          return item + page - 3;
        }),
      );
    } else {
      setNumbers(baseNumbers);
    }
  }, [page, genre, year]);

  const url = (site: number) => {
    if (site === -1) {
      router.push(
        `?page=${page - 1}${year === 0 ? "" : `&year=${year}`}${genre === 0 ? "" : `&genre=${genre}`}`,
      );
    } else if (site === +1) {
      router.push(
        `?page=${page + 1}${year === 0 ? "" : `&year=${year}`}${genre === 0 ? "" : `&genre=${genre}`}`,
      );
    } else {
      router.push(
        `?page=${site}${year === 0 ? "" : `&year=${year}`}${genre === 0 ? "" : `&genre=${genre}`}`,
      );
    }
  };

  return (
    <div id="page-control" className="flex gap-2 mx-auto mb-4">
      <button
        onClick={() => page !== 1 && url(-1)}
        className="cursor-pointer text-xl py-1 px-2 bg-orange-light rounded-md min-w-[80px] text-center"
      >
        Prev
      </button>
      {numbers.map((number, index) => {
        return (
          <p
            key={index}
            onClick={() => url(number)}
            className={`${page === number ? "bg-orange-semiDark" : "bg-orange-light"}`}
          >
            {number}
          </p>
        );
      })}
      <button
        onClick={() => url(+1)}
        className="cursor-pointer text-xl py-1 px-2 bg-orange-light rounded-md min-w-[80px] text-center"
      >
        Next
      </button>
    </div>
  );
};

export default PagesControl;
