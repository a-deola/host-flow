import React from "react";
import { Skeleton } from "./ui/skeleton";
import Shimmer from "./Shimmer";

function MobileSkeleton() {
  return (
    <div className="relative overflow-hidden lg:hidden min-h-screen">
      <Shimmer />
      <nav className="flex items-center justify-between space-x-4 border-b-2 px-5 py-3 ">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-6 w-6" />
      </nav>
      <div className="p-5">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="flex flex-col gap-2 py-3">
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} className="h-[100px] w-[280px] " />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileSkeleton;
