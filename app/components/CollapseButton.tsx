import React from "react";

function CollapseButton({
  isCollapsed,
  toggleCollapse,
}: {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}) {
  return (
    <button
      onClick={toggleCollapse}
      className="flex items-center px-4 py-2 transition-all duration-300 focus:outline-none"
    >
      <div>
        {isCollapsed ? (
          <img
            src="/icons/iconsCollapsed/double-chevron-right.png"
            alt="Chevron Right"
          />
        ) : (
          <img
            src="/icons/iconsExpanded/double-chevron-left.png"
            alt="Chevron Left"
          />
        )}
      </div>
      <span
        className={`ml-4 text-sm transition-all duration-300 ${
          isCollapsed ? "hidden" : "block"
        }`}
      >
        {isCollapsed ? "Expand" : "Collapse"}
      </span>
    </button>
  );
}

export default CollapseButton;
