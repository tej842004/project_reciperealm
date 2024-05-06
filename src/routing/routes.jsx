import Layout from "../components/Layout";
import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";
import Recipe from "../pages/recipe/Recipe";
import Search from "../pages/search/Search";
import { ThemeProvider } from "../context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
      { path: "recipe/:id", element: <Recipe /> },
      { path: "search", element: <Search /> },
    ],
  },
]);

export default router;
