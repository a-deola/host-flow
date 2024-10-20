"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import ModeToggle from "./ModeToggle";
import CollapseButton from "./CollapseButton";

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
        <NavItem
          href="/"
          iconCollapsed="/icons/iconsCollapsed/home.png"
          iconExpanded="/icons/iconsExpanded/home.png"
          text="Home"
          isCollapsed={isCollapsed}
        />
        <NavItem
          href="/"
          iconCollapsed="/icons/iconsCollapsed/components.png"
          iconExpanded="/icons/iconsExpanded/solar_calendar-linear.png"
          text="Events"
          isCollapsed={isCollapsed}
        />
        <NavItem
          href="/"
          iconExpanded="/icons/iconsExpanded/solar_user-speak-rounded-linear.png"
          iconCollapsed="/icons/iconsCollapsed/receive-money.png"
          text="Speakers"
          isCollapsed={isCollapsed}
        />
        <NavItem
          href="/"
          iconCollapsed="/icons/iconsCollapsed/calendar.png"
          iconExpanded="/icons/iconsExpanded/solar_document-linear.png"
          text="Reports"
          isCollapsed={isCollapsed}
        />
        <NavItem
          href="/"
          iconCollapsed="/icons/iconsCollapsed/bell.png"
          iconExpanded="/icons/iconsExpanded/bell.png"
          text="Notifications"
          notificationsCount={5}
          isCollapsed={isCollapsed}
        />
        <NavItem
          href="/"
          iconCollapsed="/icons/iconsCollapsed/double-chat-bubble.png"
          iconExpanded="/icons/iconsExpanded/double-chat-bubble.png"
          text="Messages"
          isCollapsed={isCollapsed}
        />
        <NavItem
          href="/"
          iconCollapsed="/icons/iconsCollapsed/settings.png"
          iconExpanded="/icons/iconsExpanded/settings.png"
          text="Settings"
          isCollapsed={isCollapsed}
        />

        <div className={` ${isCollapsed && "hidden"}`}>
          <ModeToggle />
        </div>
        <CollapseButton
          isCollapsed={isCollapsed}
          toggleCollapse={toggleCollapse}
        />
        <NavItem
          href="/"
          iconCollapsed="/icons/iconsCollapsed/avatar.png"
          iconExpanded="/icons/iconsExpanded/avatar.png"
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
