import { createBrowserRouter } from "react-router-dom";

import { Home, PlaceOrder, Cart, App } from "./index.js";
import Login from "../pages/Login.jsx";

const route = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/placeorder",
        element: <PlaceOrder />,
      },
    ],
  },
]);

export { route };
