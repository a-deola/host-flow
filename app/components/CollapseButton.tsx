import NavItem from "./NavItem";

function CollapseButton({
  isCollapsed,
  toggleCollapse,
}: {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}) {
  return (
    <NavItem
      text="Collapse"
      onClick={toggleCollapse}
      href="#"
      isCollapsed={isCollapsed}
      iconCollapsed={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
            <path d="M5.348 7.116a1.25 1.25 0 0 1 1.768 0L12 12l-4.884 4.884a1.25 1.25 0 0 1-1.768-1.768L8.464 12L5.348 8.884a1.25 1.25 0 0 1 0-1.768"></path>
            <path d="M12.366 7.116a1.25 1.25 0 0 1 1.768 0L19.018 12l-4.884 4.884a1.25 1.25 0 0 1-1.768-1.768L15.482 12l-3.116-3.116a1.25 1.25 0 0 1 0-1.768"></path>
          </g>
        </svg>
      }
      iconExpanded={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
            <path d="M17.591 16.53a.75.75 0 0 1-1.06 0L12 12l4.53-4.53a.75.75 0 0 1 1.06 1.06L14.121 12l3.47 3.47a.75.75 0 0 1 0 1.06"></path>
            <path d="M11.78 16.53a.75.75 0 0 1-1.06 0L6.19 12l4.53-4.53a.75.75 0 1 1 1.06 1.06L8.31 12l3.47 3.47a.75.75 0 0 1 0 1.06"></path>
          </g>
        </svg>
      }
    />
  );
}

export default CollapseButton;
