import Recat, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faMoon, faSun, faSunPlantWilt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { scroll } from 'fontawesome';
import logoPhoton from '../assets/images/logo_photon.svg'
import { useTheme } from '../ContextMain';


const Header = () => {

    const [isSticky, setIsSticky] = useState(false)
    const { theme, setTheme } = useTheme()
    const [isopen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isopen)
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        console.log(theme, 'theme integration')
    }

    useEffect(() => {

        const scrollHandle = () => {
            setIsSticky(window.scrollY > 50)
        }

        window.addEventListener('scroll', scrollHandle)

        return () => {
            window.removeEventListener('scroll', scrollHandle)
        }

    }, [])



    return (
        <nav className="navbar fixed-top navbar-expand-lg shadow-sm bg-white" >
            <div className='container-fluid'>
                <a href="/" className=' navbar-brand'>
                    <img src={logoPhoton} style={{width:'137px'}}
                    alt="Photon Logo"
                    loading='lazy' />
                </a>
                <button type='button' className='navbar-toggler' data-bs-toggle='collapse'
                    data-bs-target='navMenu' aria-expanded="false" aria-controls='navbarToggle'>
                    <span className='navbar-toggler-icon'></span>
                </button>
               
                <div className='collapse navbar-collapse' id='navMenu'>
                    <div className='d-flex align-center justify-content-end w-100'>
                        <div className='d-flex align-items-center justify-content-center gap-3'>
                    
                            {/* theme-btns */ }
                            <div className='btn-group' role='group' araia-label="Theme label">
                                <button onClick={ toggleTheme } 
                                className='btn bg-transparent'
                                title={ `switch to ${theme === 'light' ? 'dark' : 'light'} mode` }>
                                <span className=''>
                                    { theme === 'light' ? <FontAwesomeIcon icon={faSun} /> :
                                        <FontAwesomeIcon icon={ faMoon } /> }
                                </span>
                                </button>

                            </div>
                            {/* end */ }

                        </div>



                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header