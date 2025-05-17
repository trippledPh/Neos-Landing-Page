import LandingPage from "@/components/page/landing-page";
import LaunchPadScreen from "@/components/page/launchpad";
import NarrativeScreen from "@/components/page/narrative-page";
import { RouteObject } from "react-router-dom";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/launchpad",
    element: <LaunchPadScreen />,
  },
  {
    path: "/launchpad/narratives",
    element: <NarrativeScreen />,
  },
];
