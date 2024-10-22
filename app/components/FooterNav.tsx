import { navIcons } from "../icons";
import FooterLink from "./FooterLink";

function FooterNav() {
  const footerLinks = ["Home", "Events", "Speakers", "Reports"];
  const filteredLinks = navIcons.filter((icon) =>
    footerLinks.includes(icon.text)
  );
  return (
    <footer className="lg:hidden border-t">
      <div className="flex justify-between px-5">
        {filteredLinks.map(
          ({ text, href, iconExpanded, iconCollapsed }, index) => (
            <FooterLink
              href={href}
              key={index}
              text={text}
              icon={iconExpanded}
              iconCollapsed={iconCollapsed}
            />
          )
        )}
        <FooterLink
          href="#"
          text="Profile"
          icon=<svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                stroke="currentColor"
                strokeWidth={1.5}
                d="M21 12a8.96 8.96 0 0 1-1.526 5.016A8.99 8.99 0 0 1 12 21a8.99 8.99 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"
              ></path>
              <path
                fill="currentColor"
                d="M13.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 9zM12 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 11.75zM10.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9zM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25zM5.166 17.856l-.719-.214l-.117.392l.267.31zm13.668 0l.57.489l.266-.31l-.117-.393zM9 15.75h6v-1.5H9zm0-1.5a4.75 4.75 0 0 0-4.553 3.392l1.438.428A3.25 3.25 0 0 1 9 15.75zm3 6a8.23 8.23 0 0 1-6.265-2.882l-1.138.977A9.73 9.73 0 0 0 12 21.75zm3-4.5c1.47 0 2.715.978 3.115 2.32l1.438-.428A4.75 4.75 0 0 0 15 14.25zm3.265 1.618A8.23 8.23 0 0 1 12 20.25v1.5a9.73 9.73 0 0 0 7.403-3.405z"
              ></path>
            </g>
          </svg>
        />
      </div>
    </footer>
  );
}

export default FooterNav;
