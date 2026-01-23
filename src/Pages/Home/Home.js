import React, { useContext } from 'react'
import { ThemeContext } from '../../ContextMain'

const Home = () =>{
    return(
        <section className=''>
            <article>
                <div className='rt-banner'>
                    <picture>
                        {/* <source srcset='../../assets/images/rt_banner_img.png' width="1920" height=""  /> */}
                        <img src={require('../../assets/images/rt_banner_img.png')} alt="rt-banner" 
                        loading='lazy' className='img-fluid' />
                    </picture>
                </div>
            </article>

            <article className='container'>
                <div className='box-wrap'>
                    <p>
                        box inside the wrapper and add the span tag
                        <span className="name">
                            inside the span tag add class
                        </span>
                    </p>
                </div>
                <ColorButton/>
            </article>
        </section>
    )
}

const ColorButton = () =>{

    const {bgcolor, toggleColor} = useContext(ThemeContext)

    return(
        <>
        <div>
            <button onClick={toggleColor}
            style={{backgroundColor:bgcolor,
                color: bgcolor === 'white' ? 'block' : 'red'
            }}>Toggle Color</button>
        </div>
        </>
    )
}

export default Home