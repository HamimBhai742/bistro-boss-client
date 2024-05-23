import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import Root from '../Root/Root';
import OurMenu from '../Components/Pages/OurMenu/OurMenu';
import OurShop from '../Components/Pages/OurShop/OurShop';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  },
]);

export default router;