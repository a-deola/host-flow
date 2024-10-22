"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import TopNav from "./TopNav";

function NavTrigger() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <Dialog>
      <TopNav>
        
        <DialogTrigger asChild>
          <button onClick={toggleMobileNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
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
          </button>
        </DialogTrigger>

        <DialogContent className="h-screen w-100%">
          <MobileNav />
        </DialogContent>
      </TopNav>
    </Dialog>
  );
}

export default NavTrigger;
