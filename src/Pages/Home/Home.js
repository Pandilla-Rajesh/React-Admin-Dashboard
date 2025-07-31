import React from 'react'
import LazyLoadComponent from '../../Components/LazyLoadComponent/LazyLoadComponent'

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
                <LazyLoadComponent/>
            </article>
        </section>
    )
}

export default Home