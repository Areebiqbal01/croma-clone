import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../../page/Home'
import Cart from '../cart'
import App from '../../App'
import ProductListing from '../../page/ProductListing'
import DetailsProduct from '../../page/DetailsProduct'
import LoginForm from '../Login/LoginForm'
import CreateAccountForm from '../Login/CreateAccountForm'

const router = createBrowserRouter([{
    path: "/" ,
    element: <App></App>,
    children: [
       {
        path: "/",
        element: <Home></Home>
       },
       {
        path: "/cart",
        element: <Cart></Cart>
       },
       {
        path: "/listing",
        element: <ProductListing></ProductListing>
       },  
       {
        path: "/details",
        element: <DetailsProduct></DetailsProduct>
       },  
       {
        path: "/loginform",
        element: <LoginForm></LoginForm>
       },
       {
        path: "/createAccount",
        element: <CreateAccountForm></CreateAccountForm>
       },
    ]
    
}])


export default router