import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "./api/Api";
const Layout = () => {
  return (
    <div>
      <Header />
      {/* ScrollRestoration, posiciona la vista al principio de la página */}
      <ScrollRestoration/> 
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="font-bodyFont">
      {/* <h1 className="text-red-600 text-2xl">PetShop E-commerce</h1> */}
      <RouterProvider router={router} />
    </div>
  );
}
