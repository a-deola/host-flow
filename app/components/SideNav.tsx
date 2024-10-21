"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import ModeToggle from "./ModeToggle";
import CollapseButton from "./CollapseButton";
import { navIcons } from "../icons";

const Sidenav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex flex-col border border-r h-screen transition-all duration-300 gap-2 ${
        isCollapsed ? "w-14" : "w-48"
      }`}
    >
      <nav className="flex flex-col flex-grow">
        {navIcons.map((icon) => (
          <NavItem
            key={icon.href}
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
        <NavItem
          href="#"
          iconCollapsed={
            <img
              className="w-full"
              src="/icons/iconsCollapsed/avatar.png"
              alt="avatar"
            />
          }
          customText={
            <div className="flex flex-col pr-2 justify-center">
              <span>Rudra Devi</span>
              <span className="text-[12px]">rudra.devi@gmail.com</span>
            </div>
          }
          isCollapsed={isCollapsed}
        />
      </nav>
    </div>
  );
};

export default Sidenav;
