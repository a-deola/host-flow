import Link from "next/link";
import React from "react";

export default function NavItem({
  href,
  icon,
  iconCollapsed,
  iconExpanded,
  text,
  color,
  isCollapsed,
  customText,
}: {
  href: string;
  icon?: string;
  iconCollapsed?: string;
  iconExpanded?: string;
  text?: string;
  color: string;
  isCollapsed: boolean;
  customText?: React.ReactNode;
}) {
  const renderedIcon = icon || (isCollapsed ? iconCollapsed : iconExpanded);

  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2 transition-all duration-300"
    >
      <img src={renderedIcon} alt={text} className={`w-5 ${color}`} />
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
