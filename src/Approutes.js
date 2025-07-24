import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Login = lazy(()=>import('./Components/Login/Login.js'))
const MainLayout = lazy(()=>import('./MainLayout/MainLayout.js'))
const Dashboard = lazy(()=>import('./Components/Dashboard/Dashboard.js'))
const Cards = lazy(()=>import('./Components/Cards/Cards.js'))
const NewsPost = lazy(()=>import('./Components/NewsPost/NewsPost.js'))

function Approutes(){

    const router = createBrowserRouter([
        {index:true, element:(<Suspense fallback={<div>...Loading</div>}><Login/></Suspense>)},
        {path:'login', element:(<Suspense fallback={<div>...loading</div>}><Login/></Suspense>)},
        {path:'/', element:(<Suspense fallback={<div>...Loading</div>}><MainLayout/></Suspense>),

        children:[
            {path:'dashboard', element:(<Suspense fallback={<div>...Loading</div>}><Dashboard/></Suspense>)},
            {path:'cards', element:(<Suspense fallback={<div>...Loading</div>}><Cards/></Suspense>)},
            {path:'newspost', element:(<Suspense fallback={<div>...Loading</div>}><NewsPost/></Suspense>)}
        ]
    }
    ])

    return(<Suspense fallback={<div>...Loading</div>}><RouterProvider router={router}/></Suspense>)
}

export default Approutes