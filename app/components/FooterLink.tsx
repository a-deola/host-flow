"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function FooterLink({
  text,
  href,
  icon,
  iconCollapsed,
}: {
  text: string;
  href: string;
  icon: React.ReactNode;
  iconCollapsed?: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={`py-2 gap-1 flex flex-col justify-center items-center ${
        isActive ? "border-t-2 border-primary" : " "
      }`}
      href={href}
    >
      <span className={`text-lg ${isActive ? "text-primary" : " "}`}>
        {icon ? icon : iconCollapsed}
      </span>
      <span
        className={`text-sm text-muted-foreground ${
          isActive ? "text-primary" : " "
        }`}
      >
        {text}
      </span>
    </Link>
  );
}

export default FooterLink;
