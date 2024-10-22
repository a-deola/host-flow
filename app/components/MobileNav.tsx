import { navIcons } from "../icons";
import NavItem from "./NavItem";
import { DialogClose } from "./ui/dialog";
import TopNav from "./TopNav";
import ModeToggle from "./ModeToggle";
import NavProfile from "./NavProfile";

const MobileNav = () => {
  return (
    <section className="flex flex-col h-full lg:hidden">
      <TopNav>
        <DialogClose asChild>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m7-2l4 4m0-4l-4 4"
              ></path>
            </svg>
          </button>
        </DialogClose>
      </TopNav>
      <div className="p-2">
        {navIcons.map(
          (
            { iconCollapsed, href, text, iconExpanded, notificationCount },
            index
          ) => (
            <NavItem
              key={index}
              href={href}
              text={text}
              isCollapsed={false}
              iconCollapsed={iconCollapsed}
              iconExpanded={iconExpanded}
              notificationsCount={notificationCount}
            />
          )
        )}
      </div>
      <ModeToggle />
      <NavProfile isCollapsed={false} />
    </section>
  );
};

export default MobileNav;
