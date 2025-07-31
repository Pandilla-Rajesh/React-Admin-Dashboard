import React from 'react'
import Header from '../Header/Header'
import SideBar from '../Components/SideBar/SideBar'
import MainHeader from '../MainHeader/MainHeader'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

    return (
        <>
        <header>
            <MainHeader/>
        </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default MainLayout