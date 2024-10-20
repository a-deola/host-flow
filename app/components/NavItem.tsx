import Link from "next/link";
import React from "react";

export default function NavItem({
  href,
  icon,
  iconCollapsed,
  iconExpanded,
  text,
  isCollapsed,
  customText,
  notificationsCount,
}: {
  href: string;
  icon?: string;
  iconCollapsed?: string;
  iconExpanded?: string;
  text?: string;
  isCollapsed: boolean;
  customText?: React.ReactNode;
  notificationsCount?: number;
}) {
  const renderedIcon = icon || (isCollapsed ? iconCollapsed : iconExpanded);

  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2 transition-all duration-300 relative"
    >
      <img
        src={renderedIcon}
        alt={text}
        className={`${isCollapsed ? "w-10" : "w-5"}`}
      />
      {text === "Notifications" && (
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
}
