import React from "react";

import Link from "next/link";

const Header = () => {
  return (
    <div className="container flex flex-col gap-4 items-center justify-center py-3 md:py-5 lg:py-[20px] relative">
      <Link href="/" className="w-fit flex flex-col text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-nunito font-semibold lg:italic ">
          MOVIE KINGDOM
        </h1>
        <hr className="border-black lg:pb-3" />
        <h2 className="md:text-lg xl:text-2xl font-nunito font-semibold italic">
          all movies on one platform
        </h2>
      </Link>
    </div>
  );
};

export default Header;
