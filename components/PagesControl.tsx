"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const PagesControl = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));
  const year = Number(searchParams.get("year"));
  const genre = Number(searchParams.get("genre"));

  const router = useRouter();

  return (
    <div className="flex gap-2 mx-auto mb-4">
      <button
        onClick={() =>
          page !== 1 &&
          router.push(
            `?page=${page - 1}${year === 0 ? "" : `&year=${year}`}${genre === 0 ? "" : `&genre=${genre}`}`,
          )
        }
        className="cursor-pointer text-xl py-1 px-2 bg-orange-light rounded-md min-w-[80px] text-center"
      >
        Prev
      </button>
      <p className="cursor-pointer text-xl py-1 px-2 bg-orange-light rounded-md h-[36px] aspect-square text-center">
        1
      </p>
      <p className="cursor-pointer text-xl py-1 px-2 bg-orange-light rounded-md h-[36px] aspect-square text-center">
        2
      </p>
      <p className="cursor-pointer text-xl py-1 px-2 bg-orange-light rounded-md h-[36px] aspect-square text-center">
        3
      </p>
      <p className="cursor-pointer text-xl py-1 px-2 bg-orange-light rounded-md h-[36px] aspect-square text-center">
        4
      </p>
      <p className="cursor-pointer text-xl py-1 px-2 bg-orange-light rounded-md h-[36px] aspect-square text-center">
        5
      </p>
      <button
        // onClick={() => setPage((prevState) => prevState + 1)}
        onClick={() =>
          router.push(
            `?page=${page + 1}${year === 0 ? "" : `&year=${year}`}${genre === 0 ? "" : `&genre=${genre}`}`,
          )
        }
        className="cursor-pointer text-xl py-1 px-2 bg-orange-light rounded-md min-w-[80px] text-center"
      >
        Next
      </button>
    </div>
  );
};

export default PagesControl;
