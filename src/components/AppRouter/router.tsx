import Home from "../../Pages/Home";
import UserPage from "../../Pages/UserPage";
import { HOME_ROUTE, USER_ROUTE } from "../../Utils/consts";

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Element: <Home />,
  },
  {
    path: USER_ROUTE + "/:id",
    Element: <UserPage />,
  },
];
