"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import TopNav from "./TopNav";

function NavTrigger() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="w-full lg:hidden">
      <Dialog>
        <TopNav>
          <DialogTrigger asChild>
            <button onClick={toggleMobileNav}>
              {navOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <circle cx={12} cy={12} r={10}></circle>
                    <path d="m15 9l-6 6m0-6l6 6"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth={1.5}
                    d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
                  ></path>
                </svg>
              )}
            </button>
          </DialogTrigger>
        </TopNav>
        <DialogContent>
          <MobileNav />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NavTrigger;
