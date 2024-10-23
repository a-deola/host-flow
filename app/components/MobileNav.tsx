import { navIcons } from "../data";
import { DialogClose } from "./ui/dialog";
import TopNav from "./TopNav";
import ModeToggle from "./ModeToggle";
import NavProfile from "./NavProfile";
import MobileLink from "./MobileLink";

const MobileNav = () => {
  return (
    <section className="flex flex-col h-full lg:hidden">
      <TopNav>
        <DialogClose asChild>
          <button className="text-sm font-bold border rounded-full py-1 px-2.5 dark:bg-white dark:border-none dark:text-black">
            x
          </button>
        </DialogClose>
      </TopNav>
      <div className="flex flex-col gap-3 pr-3 py-2 ">
        {navIcons.map(
          (
            { iconCollapsed, href, text, iconExpanded, notificationCount },
            index
          ) => (
            <MobileLink
              key={index}
              text={text}
              href={href}
              icon={iconExpanded}
              iconCollapsed={iconCollapsed}
              notification={notificationCount!}
            />
          )
        )}
        <div className="px-5">
          <ModeToggle />
          <NavProfile isCollapsed={false} />
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
