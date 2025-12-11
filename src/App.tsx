import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Products from "./_components/Products/Products";
import Integration from "./_components/Integrations/Integration";
import Blogs from "./_components/Blogs";
import Pricing from "./_components/pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/Integrations",
    element: <Integration />,
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
