import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicRoutes } from "./routes/public.route";
import { PrivateRoutes } from "./routes/private.route";
import useAppStore from "./store/app.store";

const App = () => {
  const { isProtected } = useAppStore();

  const route = createBrowserRouter([
    ...(isProtected ? PrivateRoutes : PublicRoutes),
  ]);

  return <RouterProvider router={route} />;
};

export default App;
