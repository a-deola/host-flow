import NavItem from "./NavItem";

function NavProfile({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <NavItem
      href="#"
      iconCollapsed={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5"
          ></path>
          <path
            fill="currentColor"
            d="M12 7.75c-1.28 0-2.25 1-2.25 2.25s.97 2.25 2.25 2.25s2.25-1 2.25-2.25s-.97-2.25-2.25-2.25M8.25 10A3.72 3.72 0 0 1 12 6.25A3.72 3.72 0 0 1 15.75 10A3.72 3.72 0 0 1 12 13.75A3.72 3.72 0 0 1 8.25 10m6.455 5.861a.7.7 0 0 0-.216.101c-.501.338-1.374.788-2.489.788s-1.988-.45-2.489-.788a.7.7 0 0 0-.216-.1a.2.2 0 0 0-.103-.004c-.692.216-1.419.581-1.972 1.157c-.538.56-.944 1.35-.97 2.502a.75.75 0 1 1-1.5-.034c.035-1.53.593-2.68 1.388-3.507c.782-.813 1.76-1.286 2.608-1.55c.626-.195 1.216.03 1.604.293c.36.242.94.531 1.65.531s1.29-.29 1.65-.531c.388-.262.978-.488 1.604-.293c.849.264 1.826.737 2.608 1.55c.795.828 1.353 1.976 1.388 3.507a.75.75 0 1 1-1.5.034c-.026-1.151-.432-1.942-.97-2.502c-.553-.576-1.28-.941-1.972-1.157a.2.2 0 0 0-.103.003"
            opacity={0.5}
          ></path>
        </svg>
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
