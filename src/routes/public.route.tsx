import LandingPage from "@/components/page/landing-page";
import { RouteObject } from "react-router-dom";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
];
