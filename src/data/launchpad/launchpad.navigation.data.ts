import { INavigationData } from "@/interface/static.interface";

const LAUNCHPAD_NAVIGATION_DATA: INavigationData[] = [
  {
    id: 1,
    label: "Home Page",
    href: "/",
  },
  {
    id: 2,
    label: "Live Narratives",
    href: "/launchpad/narratives",
  },
  {
    id: 3,
    label: "Launch Narratives",
    href: "/launch-narratives",
  },
  {
    id: 4,
    label: "FAQs",
    href: "#faq",
    as: "anchor",
  },
];

export default LAUNCHPAD_NAVIGATION_DATA;
