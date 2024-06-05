import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Login from "./components/Login/Login";
import ThankYouPage from "./pages/thankyouPage/ThankyouPage";
import MyOrders from "./pages/myOrders/MyOrders";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const Layout = () => {
    return (
      <div className="app">
        {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
        <Navbar setShowLogin={setShowLogin} />
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
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order",
          element: <PlaceOrder />,
        },
        {
          path: "/verify-payment",
          element: <ThankYouPage />,
        },
        {
          path: "/myorders",
          element: <MyOrders />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
