import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import Root from '../Layout/Root/Root';
import OurMenu from '../Components/Pages/OurMenu/OurMenu';
import OurShop from '../Components/Pages/OurShop/OurShop';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Dasboard from '../Layout/Dasboard/Dasboard';
import MyCart from '../Components/Pages/MyCart/MyCart';
import AllUsers from '../Components/Pages/AllUsers/AllUsers';
import AddItems from '../Components/Pages/AddItems/AddItems';
import AdminPrivate from '../PrivateRoute/AdminPrivate';
import ManageItems from '../Components/Pages/ManageItems/ManageItems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/our-menu',
        element: <OurMenu></OurMenu>
      },
      {
        path: '/our-shop/:category',
        element: <PrivateRoute><OurShop></OurShop></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: 'dasboard',
    element: <PrivateRoute><Dasboard></Dasboard></PrivateRoute>,
    children: [
      {
        path: 'my-cart',
        element: <MyCart></MyCart>
      },
      {
        path: 'all-users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'add-items',
        element: <AdminPrivate><AddItems></AddItems></AdminPrivate>
      },
      {
        path: 'manage-items',
        element: <ManageItems></ManageItems>
      }
    ]
  }
]);

export default router;