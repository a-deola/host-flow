import React from "react";

function Notification({
  notification,
  isCollapsed,
}: {
  notification?: number;
  isCollapsed: boolean;
}) {
  return (
    <span
      className={`absolute top-0 right-2 transform ${
        isCollapsed ? "translate-x-1" : "translate-x-2 translate-y-2"
      } bg-destructive text-white rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
        isCollapsed ? "w-2 h-2" : "w-5 h-5"
      }`}
    >
      {notification}
    </span>
  );
}

export default Notification;
