"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import Shimmer from "./Shimmer";

function TopNav({ children }: { children: React.ReactNode }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  console.log("isImageLoaded", isImageLoaded);
  return (
    <nav className="border-b dark:border-none">
      <div className="flex pr-5 py-3 items-center justify-between">
        <div>
          <Image
            src="/icons/full-logo.png"
            alt="logo"
            width={180}
            height={50}
            onLoad={() => setIsImageLoaded(true)}
            className={`transition-opacity ${isImageLoaded ? " " : "hidden"}`}
          />
          {!isImageLoaded && (
            <div className={`relative ml-5`}>
              <Shimmer />
              <Skeleton className=" h-[50px] w-[180px]" />
            </div>
          )}
        </div>

        {children}
      </div>
    </nav>
  );
}

export default TopNav;
