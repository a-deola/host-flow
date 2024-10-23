import NavItem from "./NavItem";

function NavProfile({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <NavItem
      href="#"
      iconCollapsed={
        <img className="" src="/icons/iconsCollapsed/avatar.png" alt="avatar" />
      }
      customText={
        <div className="flex flex-col justify-center">
          <span>Rudra Devi</span>
          <span className="text-[12px] text-muted-foreground">
            rudra.devi@gmail.com
          </span>
        </div>
      }
      isCollapsed={isCollapsed}
    />
  );
}

export default NavProfile;
