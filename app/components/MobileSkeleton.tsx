import React from "react";
import { Skeleton } from "./ui/skeleton";
import Shimmer from "./Shimmer";

function MobileSkeleton() {
  return (
    <div className="lg:hidden min-h-screen">
      <nav className="flex items-center justify-between space-x-4 border-b-2 px-5 py-3 ">
        <Skeleton className="h-12 w-44" />
        <Skeleton className="h-8 w-8" />
      </nav>
      <div className="p-5">
        <div className="space-y-2">
          <div className="relative overflow-hidden w-64">
            <Shimmer />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
        <div className="flex flex-col gap-2 py-3">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="relative overflow-hidden">
              <Shimmer />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileSkeleton;
