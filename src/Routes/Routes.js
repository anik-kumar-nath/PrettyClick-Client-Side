import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import SignupWithEmail from "../Login/SignupWithEmail";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <PrivateRoutes><Services></Services></PrivateRoutes>
            },
            {
                path: '/services/details',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: '/signup',
                element: <SignupWithEmail></SignupWithEmail>
            }
        ])
    }
])