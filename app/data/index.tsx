interface IconProps {
  text: string;
  iconCollapsed: React.ReactNode;
  iconExpanded?: React.ReactNode;
  href: string;
  notificationCount?: number;
}

export const images = [
  "/images/carousel1.png",
  "/images/carousel2.png",
  "/images/carousel3.png",
];
export const news = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi facilis natus amet vel officiis rerum ex doloremque voluptate officia provident!",
  "Ipsa corrupti illo rem aperiam! Explicabo voluptatem nihil ab iste quisquam. Quisquam ducimus accusamus sed cum, fuga at ut dolor!",
  "Praesentium non harum, veritatis maiores impedit ipsa quibusdam debitis explicabo voluptatem cum odit ipsam dolore quas consequatur est at aspernatur.",
];

export const navIcons: IconProps[] = [
  {
    href: "/",
    text: "Home",
    iconCollapsed: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        </g>
      </svg>
    ),
  },
  {
    href: "#",
    text: "Events",
    iconCollapsed: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m12 3l3 3l-3 3l-3-3zm0 12l3 3l-3 3l-3-3zm6-6l3 3l-3 3l-3-3zM6 9l3 3l-3 3l-3-3z"
        ></path>
      </svg>
    ),
    iconExpanded: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            stroke="currentColor"
            strokeWidth={1.5}
            d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M7 4V2.5M17 4V2.5M2.5 9h19"
          ></path>
          <path
            fill="currentColor"
            d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    href: "#",
    text: "Speakers",
    iconCollapsed: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M152 98h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6h48a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6m-6 48h-36v-36h36Zm86 0h-18v-36h18a6 6 0 0 0 0-12h-18V56a14 14 0 0 0-14-14h-42V24a6 6 0 0 0-12 0v18h-36V24a6 6 0 0 0-12 0v18H56a14 14 0 0 0-14 14v42H24a6 6 0 0 0 0 12h18v36H24a6 6 0 0 0 0 12h18v42a14 14 0 0 0 14 14h42v18a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0v-18h42a14 14 0 0 0 14-14v-42h18a6 6 0 0 0 0-12m-30 54a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z"
        ></path>
      </svg>
    ),
    iconExpanded: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="currentColor" strokeWidth={1.5}>
          <circle cx={10} cy={6} r={4}></circle>
          <ellipse cx={10} cy={17} rx={7} ry={4}></ellipse>
          <path
            strokeLinecap="round"
            d="M19 2s2 1.2 2 4s-2 4-2 4m-2-6s1 .6 1 2s-1 2-1 2"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    href: "#",
    text: "Reports",
    iconCollapsed: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2"
        ></path>
      </svg>
    ),
    iconExpanded: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></path>
          <path strokeLinecap="round" d="M8 10h8m-8 4h5"></path>
        </g>
      </svg>
    ),
  },
  {
    href: "#",
    text: "Notifications",
    notificationCount: 5,
    iconCollapsed: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 8.4c0-1.697-.632-3.325-1.757-4.525S13.59 2 12 2s-3.117.674-4.243 1.875C6.632 5.075 6 6.703 6 8.4C6 15.867 3 18 3 18h18s-3-2.133-3-9.6M13.73 21a2 2 0 0 1-3.46 0"
        ></path>
      </svg>
    ),
  },
  {
    href: "#",
    text: "Messages",
    iconCollapsed: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M9.562 3a7.5 7.5 0 0 0-6.798 10.673l-.724 2.842a1.25 1.25 0 0 0 1.504 1.524c.75-.18 1.903-.457 2.93-.702A7.5 7.5 0 1 0 9.561 3m-6 7.5a6 6 0 1 1 3.33 5.375l-.244-.121l-.264.063c-.923.22-1.99.475-2.788.667l.69-2.708l.07-.276l-.13-.253a6 6 0 0 1-.664-2.747m11 10.5a7.48 7.48 0 0 1-5.1-2h.1c.718 0 1.415-.089 2.08-.257c.865.482 1.86.757 2.92.757c.96 0 1.866-.225 2.67-.625l.243-.121l.264.063c.922.22 1.966.445 2.74.61c-.175-.751-.414-1.756-.642-2.651l-.07-.276l.13-.253a6 6 0 0 0 .665-2.747a6 6 0 0 0-2.747-5.042a8.4 8.4 0 0 0-.8-2.047a7.503 7.503 0 0 1 4.344 10.263c.253 1.008.509 2.1.671 2.803a1.244 1.244 0 0 1-1.467 1.5a133 133 0 0 1-2.913-.64a7.5 7.5 0 0 1-3.088.663"
        ></path>
      </svg>
    ),
  },
  {
    href: "#",
    text: "Settings",
    iconCollapsed: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2"></path>
          <circle cx={12} cy={12} r={3}></circle>
        </g>
      </svg>
    ),
  },
];
