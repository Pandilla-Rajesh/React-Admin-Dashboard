import Recat, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';
import { scroll } from 'fontawesome';
import { useTheme } from '../ContextMain';


const Header = () =>{

    const [isSticky, setIsSticky] = useState(false)
    const {theme, setTheme} = useTheme()
    const [isopen, setIsOpen] = useState(true)

    const handleToggle=()=>{
        setIsOpen(!isopen)
    }

    const toggleTheme=()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
        console.log(theme, 'theme integration')
    }

    useEffect(()=>{

        const scrollHandle=()=>{
            setIsSticky(window.scrollY>50)
        }

        window.addEventListener('scroll', scrollHandle)

        return()=>{
            window.removeEventListener('scroll', scrollHandle)
        }

    }, [])



    return(
        <nav className={`nav-header navbar navbar-expand-lg shadow-sm
            ${isSticky ? '' : ''}`}>
        <div className='container-fluid topbar'>
            <button type='button' className='navbar-toggler' data-bs-toggle='collapse' 
            data-bs-target='navMenu' aria-expanded="false" aria-controls='navbarToggle'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navMenu'>
                <div className='d-flex align-center justify-content-between w-100'>
                    {/* <div>
                       <button onClick={handleToggle}>
                           <FontAwesomeIcon icon={isopen ? faBars : faTimes} />
                        </button>                        
                    </div> */}
                    <div>dv</div>
                    
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        
                        <div>
                            <a href="#" className='bg-primary text-decoration-none text-white py-3 px-4 fw-semibold rounded-5'>Upgarde to pro</a>
                        </div>
                        <div>
                            <img src='https://themewagon.github.io/spike-nuxtjs-free/images/profile/user-1.jpg' className='rounded-circle'/>
                        </div>

                        {/* theme-btns */}
                                        <div className='btn-group' role='group' araia-label="Theme label">
                        {/* <button className={`btn btn-sm ${theme === 'light' ? 'btn-primary' : 'btn-primary-outline'}`}
                        onClick={()=>setTheme('light')}>
                            Light
                        </button>
                        <button className={`btn btn-sm ${theme === 'dark' ? 'btn-dark' : 'btndark-outline'}`}
                        onClick={()=>setTheme('dark')}>Dark</button> */}

                        <button onClick={toggleTheme} className='btn bg-transparent'
                        title={`switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
                            <span className=''>
                                {theme === 'light' ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>}
                            </span>
                        </button>

                    </div>
                        {/* end */}

                    </div>

        

                </div>
            </div>
        </div>
    </nav>
    )
}

export default Header