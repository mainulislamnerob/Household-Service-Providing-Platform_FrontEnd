import React from 'react';
import { createBrowserRouter } from "react-router";
import BlogNews from '../components/home/BlogNews';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home';
import BlogDetails from '../components/home/BlogDetails';
import Services from '../pages/Services';
import Shop from '../pages/Shop';
import Team from '../pages/Team';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import DashboardLayout from '../layout/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import AddServices from '../components/dashboard/AddServices';
import Profile from '../pages/Profile';
import ShowContacts from '../components/dashboard/ShowContacts';
import UpdateService from '../components/dashboard/UpdateService';
import Contact from '../pages/Contact';
import ServiceDetails from '../pages/ServiceDetails';
import CartPage from '../pages/ShowAllCart';
import OrdersPage from '../pages/OrdersPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <BlogNews />,
      },
      {
        path: "blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "services/",
        element: <Services />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
      {
        path: "shop/",
        element: <Shop />,
      },
      {
        path: "team/",
        element: <Team />,
      },
      {
        path: "login/",
        element: <SignIn />,
      },
      {
        path: "register/",
        element: <SignUp />,
      },
    ],
  },
  
  {
    path: "dashboard/",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard/",
        element: <Dashboard />,
      },
      {
        path: "addservice/",
        element: <AddServices />,
      },
      {
        path: "service/:id/edit",
        element: <UpdateService />,
      },
      {
        path: "service/:id",
        element:<ServiceDetails/>,
      },{
        path:'checkout/',
        element:<CartPage/>
      },
      {
        path:'ordered/',
        element:<OrdersPage/>
      },
      {
        path: "showservices",
        element: <Services />,
      },
      {
        path: "contact/",
        element: <ShowContacts />,
      },
      {
        path: 'profile/',
        element: <Profile />,
      },
      {
        path: 'cart/',
        element: <Shop />
      }
    ],
  },
]);


export default router;