import { createBrowserRouter } from "react-router-dom";

import { Home, PlaceOrder, Cart, App } from "./index.js";

const route = createBrowserRouter([
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
