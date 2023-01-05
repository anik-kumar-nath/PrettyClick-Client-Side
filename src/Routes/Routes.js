import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import SignupWithEmail from "../Login/SignupWithEmail";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import Unknownroute from "../Pages/Unknownroute/Unknownroute";
import AddService from "../Pages/UserOption/AddService/AddService";
import MyReviews from "../Pages/UserOption/MyReviews/MyReviews";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://pretty-click.vercel.app/recentservice'),
                errorElement: <Unknownroute></Unknownroute>
            },
            {
                path: '/services',
                element: <Services></Services>,
                // loader: () => fetch('https://pretty-click.vercel.app/services'),
                errorElement: <Unknownroute></Unknownroute>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://pretty-click.vercel.app/services/${params.id}`),
                errorElement: <Unknownroute></Unknownroute>
            },
            {
                path: '/login',
                element: <Login></Login>,
                errorElement: <Unknownroute></Unknownroute>
            }
            ,
            {
                path: '/signup',
                element: <SignupWithEmail></SignupWithEmail>,
                errorElement: <Unknownroute></Unknownroute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                // loader: () => fetch('Blogs.json'),
                errorElement: <Unknownroute></Unknownroute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
                errorElement: <Unknownroute></Unknownroute>
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>,
                errorElement: <Unknownroute></Unknownroute>
            },
            {
                path: '*',
                element: <Unknownroute></Unknownroute>
            }
        ])
    }
])