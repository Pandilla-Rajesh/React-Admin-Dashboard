import React, { useState } from 'react'
import Header from '../Header/Header'
import SideBar from '../Components/SideBar/SideBar'
import MainHeader from '../MainHeader/MainHeader'
import { Outlet } from 'react-router-dom'
import Login from '../Components/Login/Login'

const MainLayout = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    // <>
    //     {isLoggedIn ? (
    //         <>
    //             <header>
    //                 <MainHeader />
    //             </header>
    //         </>
    //     ) : (
    //         <>
    //             <div className="app-layout">


    //                 <Header />
    //                 <div className="content-area">
    //                     <SideBar />
    //                     {/* <main>
    //                 <Outlet />
    //                 </main> */}
    //                 </div>
    //             </div>
    //         </>
    //     )}

    // </>


    <>
      <div className="app-layout">
        {/* Conditional Header */ }
        {/* <header>
          {isLoggedIn ? 
          setIsLoggedIn(true) ?? "" :  <MainHeader /> }
        </header> */}

        <div className="content-area">
          {/* { isLoggedIn ? setIsLoggedIn(false) ?? <SideBar /> : <Header /> } */ }

          <SideBar />

          <main>
            <div className='page-content'>
              <div>
                <Header />
              </div>
              <div>
                <Outlet />
              </div>
            </div>
          </main>
        </div>

      </div>
    </>

  )
}

export default MainLayout