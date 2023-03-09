import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import AddToCart from './views/AddToCart/AddToCart'
import Cart from './views/Cart/Cart'
import Checkout from './views/Checkout/Checkout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/addToCart",
    element: <AddToCart />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
