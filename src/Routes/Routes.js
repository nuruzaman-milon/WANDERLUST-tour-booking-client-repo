import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('http://localhost:5000/allServices')
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
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
    }
])