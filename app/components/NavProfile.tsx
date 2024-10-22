import NavItem from "./NavItem";

function NavProfile({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <NavItem
      href="#"
      iconCollapsed={
        <img
          className="w-full"
          src="/icons/iconsCollapsed/avatar.png"
          alt="avatar"
        />
      }
      customText={
        <div className="flex flex-col pr-2 justify-center">
          <span>Rudra Devi</span>
          <span className="text-[12px]">rudra.devi@gmail.com</span>
        </div>
      }
      isCollapsed={isCollapsed}
    />
  );
}

export default NavProfile;
