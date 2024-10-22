import React from "react";

function TopNav({ children }: { children: React.ReactNode }) {
  return (
    <nav className="w-full border-b lg:hidden">
      <div className="flex px-5 py-3 items-center justify-between">
        <h1>Logo</h1>
        {children}
      </div>
    </nav>
  );
}

export default TopNav;
