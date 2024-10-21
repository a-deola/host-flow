"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      className={`flex items-center px-4 py-2 transition-all duration-300 relative ${
        isActive ? "bg-accent text-primary" : " "
      } hover:text-primary`}
    >
      <span className={`transition-all duration-300`}>{renderedIcon}</span>
      {text === "Notifications" && notificationsCount && (
        <span
          className={`absolute top-0 right-3 transform ${
            isCollapsed ? "translate-x-1" : "translate-x-2 translate-y-2"
          } bg-destructive text-white rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
            isCollapsed ? "w-2 h-2" : "w-5 h-5"
          }`}
        >
          {!isCollapsed && notificationsCount}
        </span>
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
