import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.js'
import Aboutus from './Pages/Aboutus/Aboutus.js'
import Services from './Pages/Services/Services.js'
import Contact from './Pages/Contact/Contact.js'

const Login = lazy(() => import('./Components/Login/Login.js'))
const MainLayout = lazy(() => import('./MainLayout/MainLayout.js'))
const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard.js'))
const Cards = lazy(() => import('./Components/Cards/Cards.js'))
const NewsPost = lazy(() => import('./Components/NewsPost/NewsPost.js'))

function Approutes() {

    const router = createBrowserRouter([
        {
            path: '/', element: (<Suspense fallback={<div>...Loading</div>}><MainLayout /></Suspense>),
            children: [
                { index: true, element: (<Suspense fallback={<div>...Loading</div>}><Home /></Suspense>) },
                { path: 'home', element: (<Suspense fallback={<div>...Loading</div>}><Home /></Suspense>) },
                {path:'aboutus', element:(<Suspense fallback={<div>...Loading</div>}><Aboutus/></Suspense>)},
                {path:'services', element:(<Suspense fallback={<div>...Loading</div>}><Services/></Suspense>)},
                {path:'contact', element:(<Suspense fallback={<div>...Loading</div>}><Contact/></Suspense>)},
                {path:'login', element:(<Suspense fallback={<div>...Loading</div>}><Login/></Suspense>)},
                {path:'signup', element:(<Suspense fallback={<div>...Loading</div>}>signup</Suspense>)},
                { path: 'dashboard', element: (<Suspense fallback={<div>...Loading</div>}><Dashboard /></Suspense>) },
                { path: 'cards', element: (<Suspense fallback={<div>...Loading</div>}><Cards /></Suspense>) },
                { path: 'newspost', element: (<Suspense fallback={<div>...Loading</div>}><NewsPost /></Suspense>) }
            ]
        }
    ])

    return (<Suspense fallback={<div>...Loading</div>}><RouterProvider router={router} /></Suspense>)
}

export default Approutes