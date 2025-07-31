import { faBars, faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { search, searchDollar, servicestack } from 'fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MainHeader=()=>{

    return(
        <header className='rt-header fixed-top'>
           <nav className='rt-nav'>
               <a href="/" className='rt-brand'>
                  <img src={require('../assets/images/rhl_band.png')} alt="React-admin-logo" className='img-fluid' loading='lazy' />
               </a>
               <div className='rt-ex-btn'>
                  <button>Explore</button>
               </div>
           </nav>
           
           {/* search-form */}
           <div className='rt-header-search rt-search-auto-complete' lang='en' locale="en_US" direction="ltr">
               <form action="" className='rt-input-group'>
                   <div className='rt-form-in'>
                      <button>
                      <span className='input-group-text'>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                   </button>
                   <input type="text" className='form-control' placeholder='Search' />
                   </div>
               </form>
           </div>
           {/* end */}

            {/* links */}
            <nav className='rt-nav-links'>
               <NavLink to={{pathname:'home'}} className={({isActive}) => isActive ? 'text-danger' : ''}>Home</NavLink>
               <NavLink to={{pathname:'aboutus'}} className={({isActive}) => isActive ? 'text-danger' : ''}>About Us</NavLink>
                <NavLink to={{pathname:'services'}} className={({isActive}) => isActive ? 'text-danger' : ''}>Services</NavLink>
                <NavLink to={{pathname:'contact'}} className={({isActive}) => isActive ? 'text-danger' : ''}>Contact</NavLink>
            </nav>

        {/* end */}

        {/* log-buttons */}

       <div className='rt-log-btns'>
                <NavLink to={{pathname:'login'}} className="rt-log-sec-btn">Login</NavLink>
                <NavLink to={{pathname:'signup'}} className="rt-log-primary-btn">SignUp</NavLink>
                <NavLink className="rt-globe-btn">
                    <FontAwesomeIcon icon={faGlobe} />
                </NavLink>
            </div>

        {/* end */}

        </header>
    )
}

export default MainHeader