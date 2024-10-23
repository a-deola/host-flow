import Link from "next/link";
import Notification from "./Notification";
import { usePathname } from "next/navigation";

function MobileLink({
  text,
  href,
  icon,
  iconCollapsed,
  notification,
}: {
  text: string;
  href: string;
  icon: React.ReactNode;
  iconCollapsed?: React.ReactNode;
  notification: number;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={`gap-4 flex relative pl-5 ${
        isActive ? "border-l-2 border-primary" : " "
      }`}
      href={href}
    >
      <span className="text-lg text-muted-foreground font-bold">
        {icon ? icon : iconCollapsed}
      </span>
      <span className="text-sm">{text}</span>
      {notification && (
        <Notification isCollapsed={false} notification={notification} />
      )}
    </Link>
  );
}

export default MobileLink;
