"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Notification from "./Notification";

interface NavItemProps {
  href: string;
  iconCollapsed: React.ReactNode;
  iconExpanded?: React.ReactNode;
  text?: string;
  isCollapsed: boolean;
  notificationsCount?: number;
  customText?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  iconCollapsed,
  iconExpanded,
  text,
  isCollapsed,
  notificationsCount,
  customText,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const renderedIcon =
    isCollapsed || !iconExpanded ? iconCollapsed : iconExpanded;

  return (
    <Link
      href={href}
      className={`flex items-center p-2 rounded transition-all duration-300 relative bg-transparent ${
        isActive
          ? "bg-accent text-primary dark:bg-primary dark:text-white"
          : " "
      } hover:text-primary bg-accent`}
    >
      <span className={`transition-all duration-300`}>{renderedIcon}</span>

      {text === "Notifications" && notificationsCount && (
        <Notification
          isCollapsed={isCollapsed}
          notification={notificationsCount}
        />
      )}
      <span
        className={`ml-4 text-sm transition-all duration-300 ${
          isCollapsed ? "hidden" : "block"
        }`}
      >
        {customText ? customText : text}
      </span>
    </Link>
  );
};
export default NavItem;
