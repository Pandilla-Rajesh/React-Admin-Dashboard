import React, { useState } from 'react'
import Header from '../Header/Header'
import SideBar from '../Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

  const [isOpen, setIsOpen] = useState(true)

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
        <Header />

        <div className="content-area">
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

          <main
            className={`page-content ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}
            style={{ paddingTop: 'var(--ct-topbar-height)' }}
          >
            <Outlet />
          </main>
        </div>

      </div>
    </>

  )
}

export default MainLayout