import { RouterProvider, createBrowserRouter } from "react-router-dom";

// laayouts
import MainLayout from "./layouts/MainLayout";

// pages
import { Home, Cart } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
