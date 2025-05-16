import LaunchPadScreen from "@/components/page/launchpad";
import { RouteObject } from "react-router-dom";

export const PrivateRoutes: RouteObject[] = [
  {
    path: "/",
    element: <LaunchPadScreen />,
  },
  {
    path: "/launchpad/narative",
    element: <LaunchPadScreen />,
  },
];
