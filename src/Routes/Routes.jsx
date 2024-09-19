import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyBookings from "../pages/MyBookings/MyBookings";

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
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/mybookings',
          element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        }
      ]
    },
  ]);


export default router;