import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faBars, faClose, faTimes } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Header/Header';

const SideBar = () =>{

    const[isOpen, setOpen] = useState(true)
    const handleToggle = ()=>{
        setOpen(!isOpen)
    }

    return(
        <div>
        <button type='button' className='toggle-button bg-transparent' onClick={handleToggle}>
        <FontAwesomeIcon icon={isOpen ? faBars :  faClose} />
        </button>

        {/* side-bar */}

            <div className={`side-bar rounded-0 bg-white shadow-sm ${isOpen ? 'open' : 'closed'}`}>
                <div>
                     <a href="#" className='navbar-brand text-danger fw-bolder fs-3'>
                <img src="https://themewagon.github.io/spike-nuxtjs-free/images/logos/logo-dark.svg" className='img-fluid' alt="brand" />
            </a>
                </div>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'><i class="fa-light fa-arrow-right"></i>
                        <Link className='nav-link text-dark border-bottom fw-regular fs-6 ps-3 py-3' to='/dashboard'>
                            <span className='me-1'>
                                <FontAwesomeIcon icon={faAnglesRight}/></span> Dashboard
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-dark border-bottom fw-regular fs-6 ps-3 py-3' to='/cards'>
                           <span className='me-1'><FontAwesomeIcon icon={faAnglesRight}/></span> Custom Cards
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-dark border-bottom fw-regular fs-6 ps-3 py-3' to="/newspost">
                           <span className='me-1'><FontAwesomeIcon icon={faAnglesRight}/></span> NewsPost
                        </Link>
                    </li>
                </ul>
            </div>

        {/* end */}

        {/* outlet */}
        {/* <div className=''>
                    <Header />
                </div> */}
                <Header />
        <div className={`${isOpen ? 'content-col' : 'container-fluid'}`}>
            
            <Outlet/>
        </div>
        {/* end */}

    </div>
    )
}

export default SideBar