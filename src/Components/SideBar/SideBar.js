import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faBars, faClose, faCode, faDiamond, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Header/Header';
import { faCarSide } from '@fortawesome/free-solid-svg-icons/faCarSide';
import { faReact, faUikit, faUncharted } from '@fortawesome/free-brands-svg-icons';

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

            <div className={`side-bar rounded-0 shadow-sm ${isOpen ? 'open' : 'closed'}`}>
                <div className='brand-info'>
                <a href="#" className='navbar-brand'>
                <img src={require('../../assets/images/falcon_brand.png')} className='img-fluid'
                 alt="react_brand" />
                 <h1 className='font-brand'>React Dashboard</h1>
            </a>
                </div>
                <ul className='navbar-nav ms-auto py-2'>
                    <li className=''>
                        <span className='side-nav-tl'>Navigation</span>
                    </li>
                    <li className='nav-item'><i class="fa-light fa-arrow-right"></i>
                        <Link className='nav-link ps-3' to='/dashboard'>
                            <span className='me-1'>
                                <FontAwesomeIcon icon={faHome}/></span> Dashboard
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link ps-3' to='/cards'>
                           <span className='me-1'><FontAwesomeIcon icon={faReact}/></span> React Hooks
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link ps-3' to="/newspost">
                           <span className='me-1'><FontAwesomeIcon icon={faCode}/></span> HTML Info
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link ps-3'>
                            <span className='me-1'>
                                <FontAwesomeIcon icon={faDiamond} />
                            </span> Base UI
                                                    
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