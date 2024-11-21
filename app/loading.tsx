import React from "react";
import MobileSkeleton from "./components/MobileSkeleton";
import LargeSkeleton from "./components/LargeSkeleton";

export default function Loading() {
  return (
    <main>
      <MobileSkeleton />
      <LargeSkeleton />
    </main>
  );
}
