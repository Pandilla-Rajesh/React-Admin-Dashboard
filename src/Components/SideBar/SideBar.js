import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faBars, faClose, faCode, faDiamond, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Header/Header';
import { faCarSide } from '@fortawesome/free-solid-svg-icons/faCarSide';
import { faReact, faUikit, faUncharted } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

const SideBar = () => {

    const [isOpen, setOpen] = useState(true)
    const handleToggle = () => {
        setOpen(!isOpen)
    }

    return (
        <div className=' position-relative'>

            {/* side-bar */ }

            <div className={ `side-bar rounded-0 shadow-sm ${isOpen ? 'open' : 'closed'}` }>
                <div className='brand-info'>
                    <a href="#" className='navbar-brand'>
                        <img src={ require('../../assets/images/falcon_brand.png') } className='img-fluid'
                            alt="react_brand" />
                        <h1 className='font-brand'>React Dashboard</h1>
                    </a>
                    <button type='button' className='toggle-button bg-transparent' onClick={ handleToggle }>
                        <FontAwesomeIcon icon={ isOpen ? faBars : faClose } />
                    </button>
                </div>
                <ul className='navbar-nav ms-auto py-2'>
                    <li className=''>
                        <span className='side-nav-tl'>Menu</span>
                    </li>
                    <li className='nav-item'>
                        <i class="fa-light fa-arrow-right"></i>
                        {/* <Link className='nav-link' to='/dashboard'>
                            <span className='me-1'>
                                <FontAwesomeIcon icon={ faHome } /></span> Dashboard
                        </Link> */}
                        <NavLink to={ { pathname: '/dashboard' } }
                            className={ ({ isActive }) => isActive ? 'nav-item' : 'text-white' }>
                            <span className='nav-link'>
                                <FontAwesomeIcon icon={ faHome } />
                                <strong className='ms-2'>Dashboard</strong>
                            </span>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link ' to='/cards'>
                            <span className='me-1'><FontAwesomeIcon icon={ faReact } /></span> React Hooks
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link ' to="/newspost">
                            <span className='me-1'><FontAwesomeIcon icon={ faCode } /></span> HTML Info
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link '>
                            <span className='me-1'>
                                <FontAwesomeIcon icon={ faDiamond } />
                            </span> Base UI

                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link " to="/breed">
                            <span className='me-1'>
                                <FontAwesomeIcon icon={ faImage } />
                            </span>Breed Image
                        </Link>
                    </li>
                </ul>
            </div>

            {/* end */ }

            {/* outlet */ }
            {/* <div className=''>
                    <Header />
                </div> */}

            {/* <div className={ `${isOpen ? 'content-col' : 'container-fluid'}` }>
                <Outlet />
            </div> */}
            {/* end */ }

        </div>
    )
}

export default SideBar