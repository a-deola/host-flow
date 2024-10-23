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
    <div
      className={`hidden lg:flex flex-col border-r h-screen transition-all duration-300 dark:border-none dark:bg-card ${
        isCollapsed ? "w-14 p-1" : "w-48 p-4"
      }`}
    >
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
    </div>
  );
};

export default Sidenav;
