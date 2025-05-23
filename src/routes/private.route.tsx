import NarrativeScreen from "@/components/page/narrative-page";
import TokenExchangeScreen from "@/components/page/token-exchange";
import { RouteObject } from "react-router-dom";

export const PrivateRoutes: RouteObject[] = [
  {
    path: "/launchpad/narratives",
    element: <NarrativeScreen />,
  },

  {
    path: "/launchpad/token-exchange",
    element: <TokenExchangeScreen />,
  },
];
