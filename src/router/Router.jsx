import { createBrowserRouter } from "react-router-dom";
import AddToCard from "../components/AddToCard";
import DashboardRoot from "../layout/DashboardRoot";
import Root from "../layout/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactMe from "../Pages/ContactMe/ContactMe";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import BuyerOrder from "../Pages/Dashboard/BuyerOrder/BuyerOrder";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ManageOrder from "../Pages/Dashboard/ManageOrder/ManageOrder";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import Sellers from "../Pages/Dashboard/Sellers/Sellers";
import Users from "../Pages/Dashboard/Users/Users";
import Home from "../Pages/home/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Products/Products";
import Error from "../Pages/shared/Error/Error";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Home></Home>,
        errorElement: <Error></Error>,
    },
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/productDetails',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactMe',
                element: <ContactMe></ContactMe>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardRoot></DashboardRoot>,
        children:[
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorder',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/buyerOrder',
                element: <BuyerOrder></BuyerOrder>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/manageOrder',
                element: <ManageOrder></ManageOrder>
            },
            {
                path: '/dashboard/users',
                element: <Users></Users>
            },
            {
                path: '/dashboard/sellers',
                element: <Sellers></Sellers>
            },
        ]
    }
])