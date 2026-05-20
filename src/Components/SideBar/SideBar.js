import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faBars,
    faClose,
    faCode,
    faDiamond,
    faHome
} from '@fortawesome/free-solid-svg-icons'

import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'

const SideBar = ({ isOpen, setIsOpen }) => {

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='position-relative'>

            <div className={`side-bar shadow-sm ${isOpen ? 'open' : 'closed'}`}>
                
                <ul className='navbar-nav ms-auto'>
                    <div className=' position-relative'>
                     <button
                        type='button'
                        className='toggle-button border-0'
                        onClick={handleToggle}
                    >
                        <FontAwesomeIcon
                            icon={isOpen ? faClose : faBars}
                        />
                    </button>
                </div>
                    <li className='nav-item'>

                        <NavLink
                            to='/dashboard'
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            <FontAwesomeIcon icon={faHome} />
                            <strong className='ms-2'>Dashboard</strong>
                        </NavLink>

                    </li>

                    <li className='nav-item'>

                        <Link className='nav-link' to='/cards'>
                            <FontAwesomeIcon icon={faReact} />
                            <span className='ms-2'>React Hooks</span>
                        </Link>

                    </li>

                    <li className='nav-item'>

                        <Link className='nav-link' to='/newspost'>
                            <FontAwesomeIcon icon={faCode} />
                            <span className='ms-2'>HTML Info</span>
                        </Link>

                    </li>

                    <li className='nav-item'>

                        <Link className='nav-link' to='/baseui'>
                            <FontAwesomeIcon icon={faDiamond} />
                            <span className='ms-2'>Base UI</span>
                        </Link>

                    </li>

                    <li className='nav-item'>

                        <Link className='nav-link' to='/breed'>
                            <FontAwesomeIcon icon={faImage} />
                            <span className='ms-2'>Breed Image</span>
                        </Link>

                    </li>

                </ul>

            </div>

        </div>
    )
}

export default SideBar