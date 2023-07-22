import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipePage from "./pages/recipepage/RecipePage.jsx";
import MainPage from "./pages/mainpage/MainPage.jsx";
import ErrorPage from "./pages/errorpage/ErrorPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "recipe/:recipeId",
    element: <RecipePage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
