"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import ModeToggle from "./ModeToggle";

const Sidenav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex flex-col border border-r h-screen transition-all duration-300 gap-2 ${
        isCollapsed ? "w-12" : "w-48"
      }`}
    >
      <nav className="flex flex-col flex-grow">
        <NavItem
          href="/"
          icon="/icons/home.png"
          text="Home"
          isCollapsed={isCollapsed}
          color={isCollapsed ? "#64748B" : "var(--primary-select)"}
        />
        <NavItem
          href="/events"
          iconCollapsed="/icons/components.png"
          iconExpanded="icons/calendar.png"
          text="Events"
          isCollapsed={isCollapsed}
          color={isCollapsed ? "#64748B" : "var(--primary-select)"}
        />
        <NavItem
          href="/"
          iconExpanded="/icons/solar_user-speak-rounded-linear.png"
          iconCollapsed="/icons/receive-money.png"
          text="Speakers"
          isCollapsed={isCollapsed}
          color={isCollapsed ? "#64748B" : "var(--primary-select)"}
        />
        <NavItem
          href="/"
          icon="/icons/bell.png"
          text="Notifications"
          isCollapsed={isCollapsed}
          color={isCollapsed ? "#64748B" : "var(--primary-select)"}
        />
        <NavItem
          href="/"
          icon="/icons/double-chat-bubble.png"
          text="Messages"
          isCollapsed={isCollapsed}
          color={isCollapsed ? "#64748B" : "var(--primary-select)"}
        />
        <NavItem
          href="/"
          icon="/icons/settings-2.png"
          text="Settings"
          isCollapsed={isCollapsed}
          color={isCollapsed ? "#64748B" : "var(--primary-select)"}
        />
        <NavItem
          href="/"
          icon="/icons/avatar.png"
          customText={
            <div className="flex flex-col">
              <span>Rudra Devi</span>
              <span className="text-xs">rudra.devi@gmail.com</span>
            </div>
          }
          isCollapsed={isCollapsed}
          color={isCollapsed ? "#64748B" : "var(--primary-select)"}
        />
        <div
          className={` ${
            isCollapsed ? "flex justify-center" : "flex items-center space-x-2"
          }`}
        >
          <ModeToggle isCollapsed={isCollapsed} />
        </div>
        <button
          onClick={toggleCollapse}
          className="flex items-center px-4 py-2 transition-all duration-300 focus:outline-none"
        >
          <div>
            {isCollapsed ? (
              <img src="/icons/double-chevron-right.png" alt="Chevron Right" />
            ) : (
              <img src="/icons/double-chevron-left.png" alt="Chevron Left" />
            )}
          </div>
          <span
            className={`ml-4 text-sm transition-all duration-300 ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            {isCollapsed ? " " : "Collapse"}
          </span>
        </button>
      </nav>
    </div>
  );
};

export default Sidenav;
