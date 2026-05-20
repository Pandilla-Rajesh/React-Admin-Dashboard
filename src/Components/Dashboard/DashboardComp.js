
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { user } from 'fontawesome'
import React, { useEffect, useState } from 'react'

const DashboardComp = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({})

    const getUsers = async()=>{
        setLoading(false)
        try{

            const response = await fetch('https://dummyjson.com/users')
            const res = await response.json()
            setUsers(res.users)
            console.log(res.users)

        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getUsers()
    }, [])

    return (
     <section className='p-3 bg-white rounded-3 border-2'>
        <article className=' container ms-auto'>
            <div className='row row-cols-xl-3 row-cols-xxl-5 row-cols-md-2 row-cols-1 mb-3'>
                         <div className='col mb-3'>
                    <div className='card bg-primary text-white'>
                        <div className=' card-body'>
                            <div className=' d-flex align-items-center justify-content-between mb-3'>
                                <div className=' d-flex align-items-center'>
                                   <div className=' d-flex align-items-center gap-3'>
                                    <FontAwesomeIcon icon={faFacebookSquare} 
                                    className=' fs-3' />
                                    <a href="#" className=' text-decoration-none
                                     text-white fs-16'>Facebook</a>
                                   </div>
                                </div>
                                <span className=' bg-success-subtle text-success badge'>
                                    +3.4%
                                </span>
                            </div>
                            <div className=' text-center mb-2'>
                                    <h5 className='mb-1'>120000</h5>
                                    <p className=' fw-bold fs-3'>Followers</p>
                                </div>
                            <div className='row text-center'>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=''>Posts</span>
                                        <h6 className=''>230</h6>
                                    </div>
                                </div>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=''>Engagement</span>
                                        <h6>33%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col mb-3'>
                    <div className='card bg-danger text-white'>
                        <div className=' card-body'>
                            <div className=' d-flex align-items-center justify-content-between mb-3'>
                                <div className=' d-flex align-items-center'>
                                   <div className=' d-flex align-items-center gap-3'>
                                    <FontAwesomeIcon icon={faInstagram} 
                                    className=' fs-3 ' />
                                    <a href="#" className=' text-white fs-16 text-decoration-none'>Instagram</a>
                                   </div>
                                </div>
                                <span className=' bg-success-subtle text-success badge'>
                                    +3.4%
                                </span>
                            </div>
                            <div className=' text-center mb-2'>
                                    <h5 className='mb-1'>120000</h5>
                                    <p className=' fs-3 fw-bold'>Followers</p>
                                </div>
                            <div className='row text-center'>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=''>Posts</span>
                                        <h6 className=''>230</h6>
                                    </div>
                                </div>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=''>Engagement</span>
                                        <h6>33%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col mb-3'>
                    <div className='card bg-info'>
                        <div className=' card-body'>
                            <div className=' d-flex align-items-center justify-content-between mb-3'>
                                <div className=' d-flex align-items-center text-white'>
                                   <div className=' d-flex align-items-center gap-3'>
                                    <FontAwesomeIcon icon={ faTwitterSquare} 
                                    className=' fs-3' />
                                    <a href="#" 
                                    className=' text-white text-decoration-none
                                    fs-16'>Twitter</a>
                                   </div>
                                </div>
                                <span className=' bg-success-subtle text-success badge'>
                                    +3.4%
                                </span>
                            </div>
                            <div className=' text-center mb-2'>
                                    <h5 className='mb-1'>10000</h5>
                                    <p className=' fs-3 fw-bold'>Followers</p>
                                </div>
                            <div className='row text-center'>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=''>Posts</span>
                                        <h6 className=''>230</h6>
                                    </div>
                                </div>
                                <div className=' col-6'>
                                    <div className=' border-end'>
                                        <span className=''>Engagement</span>
                                        <h6>33%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className=' table-responsive'>
            <table className=' table table-bordered overflow-hidden rounded-3'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <p>...Loading</p>
                    ) : (
                        users.length > 0 ? (
                            users.slice(0, 20)?.map((user, index)=>(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>
                                        <strong>{user.email}</strong>
                                    </td>
                                    <td>{user.gender}</td>
                                    <td>
                                        <h6 className='mb-0'>{user.address?.address}</h6>
                                       <span className=' fw-bold'>
                                           {user.address?.city}
                                       </span>
                                    </td>
                                </tr>
                            ))
                        ) :(
                          <tr>
                            <td colSpan="5">NoData Found</td>
                          </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>

        </article>
     </section>
    )
}
export default DashboardComp