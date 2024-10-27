"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import ModeToggle from "./ModeToggle";
import CollapseButton from "./CollapseButton";
import { navIcons } from "../data";
import NavProfile from "./NavProfile";

const Sidenav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`hidden lg:flex flex-col border-r min-h-screen transition-all duration-300 dark:border-none dark:bg-card ${
        isCollapsed ? "w-16 p-1" : "w-48 py-4 px-2"
      }`}
    >
      <img
        src={`${isCollapsed ? "/icons/logo.svg" : "/icons/Logo.svg"}`}
        alt="logo"
        className={` mb-5 ${isCollapsed && "w-8"}`}
      />
      <nav className="flex flex-col gap-2 flex-grow">
        {navIcons.map((icon) => (
          <NavItem
            key={icon.text}
            href={icon.href}
            text={icon.text}
            iconCollapsed={icon.iconCollapsed}
            iconExpanded={icon.iconExpanded}
            isCollapsed={isCollapsed}
            notificationsCount={icon.notificationCount}
          />
        ))}
        <CollapseButton
          isCollapsed={isCollapsed}
          toggleCollapse={toggleCollapse}
        />
        <div className={` ${isCollapsed && "hidden"}`}>
          <ModeToggle />
        </div>
        <NavProfile isCollapsed={isCollapsed} />
      </nav>
    </aside>
  );
};

export default Sidenav;
