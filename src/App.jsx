import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  About,
  Cart,
  EditProduct,
  Orders,
  Products,
  SingleProduct,
  Login,
  Register,
  Error,
} from "./pages";
import { ErrorElement } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        element: <About />,
        errorElement: <ErrorElement />,
        path: "about",
      },
      {
        element: <Cart />,
        errorElement: <ErrorElement />,
        path: "cart",
      },
      {
        element: <EditProduct />,
        errorElement: <ErrorElement />,
        path: "edit-product/:id",
      },
      {
        element: <Orders />,
        errorElement: <ErrorElement />,
        path: "orders",
      },
      {
        element: <Products />,
        errorElement: <ErrorElement />,
        path: "products",
      },
      {
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        path: "products/:id",
      },
    ],
  },
  {
    element: <Login />,
    errorElement: <Error />,
    path: "/login",
  },
  {
    element: <Register />,
    errorElement: <Error />,
    path: "/register",
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
