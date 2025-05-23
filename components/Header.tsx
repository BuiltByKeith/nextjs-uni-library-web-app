"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Header = () => {
  const pathName = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link
        href={"/"}
        className="flex flex-row justify-center items-center gap-6"
      >
        <Image
          src={"/icons/logo.svg"}
          alt="logo"
          width={40}
          height={40}
        ></Image>
        <p className="font-bebas-neue font-semibold text-4xl text-white">
          UniLib
        </p>
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href={"/library"}
            className={cn(
              "text-base cursor-pointer capitalize",
              pathName === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            Library
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
