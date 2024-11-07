import React from "react";
import { Skeleton } from "./components/ui/skeleton";
import MobileSkeleton from "./components/MobileSkeleton";

export default function Loading() {
  return (
    <main>
      <MobileSkeleton />
    </main>
  );
}
