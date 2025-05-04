import { APP_CONFIG } from "@/config/app.config";

const NAVIGATION_DATA = [
  {
    id: 1,
    label: "Features",
    href: "#features",
  },
  {
    id: 2,
    label: "Tokenomics",
    href: "#tokenomics",
  },

  {
    id: 3,
    label: "Roadmap",
    href: "#roadmap",
  },

  {
    id: 4,
    label: "Whitepaper",
    href: APP_CONFIG.env.GITBOOK_URL,
    target: "_blank",
  },

  {
    id: 5,
    label: "Launchpad",
    href: "/",
  },
];

export default NAVIGATION_DATA;
