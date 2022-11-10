import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Reviews from "../pages/Reviews/Reviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services";
import UpdateReview from "../pages/UpdateReview/UpdateReview";

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
            {
                path:'/myReviews',
                element:<Reviews></Reviews>
            },
            {
                path:'/myReviews/:id',
                element:<UpdateReview></UpdateReview>,
                loader:({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            {
                path:'/addService',
                element:<AddService></AddService>
            }
        ]
    }
])