
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DashboardComp = () => {

    return (
     <section className='bg-white p-3'>
        <article className=' container ms-auto'>
            <div className='row row-cols-xl-3 row-cols-xxl-5 row-cols-md-2 row-cols-1'>
                
                <div className='col mb-3'>
                    <div className='card'>
                        <div className=' card-body'>
                            <div className=' d-flex align-items-center justify-content-between mb-3'>
                                <div className=' d-flex align-items-center'>
                                   <div className=' d-flex align-items-center gap-3'>
                                    <FontAwesomeIcon icon={faFacebookSquare} 
                                    className=' fs-3 text-primary' />
                                    <a href="#" className=' text-body fs-16'>Facebook</a>
                                   </div>
                                </div>
                                <span className=' bg-success-subtle text-success badge'>
                                    +3.4%
                                </span>
                            </div>
                            <div className=' text-center mb-2'>
                                    <h5 className='mb-1'>120000</h5>
                                    <p className=' text-muted'>Followers</p>
                                </div>
                            <div className='row text-center'>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=' text-muted'>Posts</span>
                                        <h6 className=''>230</h6>
                                    </div>
                                </div>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=' text-muted'>Engagement</span>
                                        <h6>33%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col mb-3'>
                    <div className='card'>
                        <div className=' card-body'>
                            <div className=' d-flex align-items-center justify-content-between mb-3'>
                                <div className=' d-flex align-items-center'>
                                   <div className=' d-flex align-items-center gap-3'>
                                    <FontAwesomeIcon icon={faInstagram} 
                                    className=' fs-3 text-danger' />
                                    <a href="#" className=' text-body fs-16'>Facebook</a>
                                   </div>
                                </div>
                                <span className=' bg-success-subtle text-success badge'>
                                    +3.4%
                                </span>
                            </div>
                            <div className=' text-center mb-2'>
                                    <h5 className='mb-1'>120000</h5>
                                    <p className=' text-muted'>Followers</p>
                                </div>
                            <div className='row text-center'>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=' text-muted'>Posts</span>
                                        <h6 className=''>230</h6>
                                    </div>
                                </div>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=' text-muted'>Engagement</span>
                                        <h6>33%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col mb-3'>
                    <div className='card'>
                        <div className=' card-body'>
                            <div className=' d-flex align-items-center justify-content-between mb-3'>
                                <div className=' d-flex align-items-center'>
                                   <div className=' d-flex align-items-center gap-3'>
                                    <FontAwesomeIcon icon={ faTwitterSquare} 
                                    className=' fs-3 text-info' />
                                    <a href="#" className=' text-body fs-16'>Facebook</a>
                                   </div>
                                </div>
                                <span className=' bg-success-subtle text-success badge'>
                                    +3.4%
                                </span>
                            </div>
                            <div className=' text-center mb-2'>
                                    <h5 className='mb-1'>120000</h5>
                                    <p className=' text-muted'>Followers</p>
                                </div>
                            <div className='row text-center'>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=' text-muted'>Posts</span>
                                        <h6 className=''>230</h6>
                                    </div>
                                </div>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=' text-muted'>Engagement</span>
                                        <h6>33%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='card'>
                        <div className=' card-body'>
                            <div className=' d-flex align-items-center justify-content-between mb-3'>
                                <div className=' d-flex align-items-center'>
                                   <div className=' d-flex align-items-center gap-3'>
                                    <FontAwesomeIcon icon={ faYoutube}
                                    className=' fs-3 text-danger' />
                                    <a href="#" className=' text-body fs-16'>Facebook</a>
                                   </div>
                                </div>
                                <span className=' bg-success-subtle text-success badge'>
                                    +3.4%
                                </span>
                            </div>
                            <div className=' text-center mb-2'>
                                    <h5 className='mb-1'>120000</h5>
                                    <p className=' text-muted'>Followers</p>
                                </div>
                            <div className='row text-center'>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=' text-muted'>Posts</span>
                                        <h6 className=''>230</h6>
                                    </div>
                                </div>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=' text-muted'>Engagement</span>
                                        <h6>33%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='card'>
                        <div className=' card-body'>
                            <div className=' d-flex align-items-center justify-content-between mb-3'>
                                <div className=' d-flex align-items-center'>
                                   <div className=' d-flex align-items-center gap-3'>
                                    <FontAwesomeIcon icon={ faLinkedin}
                                    className=' fs-3 text-primary' />
                                    <a href="#" className=' text-body fs-16'>Facebook</a>
                                   </div>
                                </div>
                                <span className=' bg-success-subtle text-success badge'>
                                    +3.4%
                                </span>
                            </div>
                            <div className=' text-center mb-2'>
                                    <h5 className='mb-1'>120000</h5>
                                    <p className=' text-muted'>Followers</p>
                                </div>
                            <div className='row text-center'>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=' text-muted'>Posts</span>
                                        <h6 className=''>230</h6>
                                    </div>
                                </div>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=' text-muted'>Engagement</span>
                                        <h6>33%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
     </section>
    )
}
export default DashboardComp