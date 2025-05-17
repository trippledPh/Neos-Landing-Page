import { APP_CONFIG } from "@/config/app.config";

export const FOOTER_DATA_LEFT_SIDE = [
  {
    id: 1,
    name: "Feature",
    url: "#features",
  },
  {
    id: 2,
    name: "Tokenomics",
    url: "#tokenomics",
  },

  {
    id: 3,
    name: "Roadmap",
    url: "#roadmap",
  },

  {
    id: 4,
    name: "How it works",
    url: "#how-it-works",
  },
];

export const FOOTER_DATA_RIGHT_SIDE = [
  {
    id: 1,
    name: "Documentation",
    url: APP_CONFIG.env.GITBOOK_URL,
  },

  {
    id: 2,
    name: "Contact",
    url: "#contact",
  },
];
