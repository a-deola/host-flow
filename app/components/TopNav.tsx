import React from "react";
import Image from "next/image";

function TopNav({ children }: { children: React.ReactNode }) {
  return (
    <nav className="border-b dark:border-none">
      <div className="flex px-5 py-3 items-center justify-between">
        <Image src="/icons/full-logo.png" alt="logo" width={100} />
        {children}
      </div>
    </nav>
  );
}

export default TopNav;
