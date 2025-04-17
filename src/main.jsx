import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobile from "./Components/Mobile/Mobile.jsx";
import Laptops from "./Components/Laptops/Laptops.jsx";
import Users from "./Components/users/Users.jsx";
import Users2 from "./Components/users/Users2.jsx";

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // this paths makes changes in Outlet
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobile },
      { path: "laptops", Component: Laptops },
      { path: "app", Component: App },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "react",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
