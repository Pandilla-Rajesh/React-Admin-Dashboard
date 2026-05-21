
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { search, user } from 'fontawesome'
import React, { useEffect, useState } from 'react'
import { LineChart } from 'recharts'
import Example from '../../Charts/BixialLIne'
import BixialLIne from '../../Charts/BixialLIne'

const DashboardComp = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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

    const [search, setSearch] = useState('')

    if(error) return <p>{error.message}</p>

    const handleSearch = (e) =>{
        
        setSearch(e.target.value)
    }

   const filterUsers = users.filter((user)=>

        user.id.toString().includes(search) ||
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
)

   

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

                 <div className='row'>
            <div className='col-xl-5 col-xxl-6 mb-3'>
                <div className=' card'>
                    <div className=' card-header bg-transparent'>
                        <div className=''>
                            <h5 className='fs-6 mb-0'>Instagram Followers Growth</h5>
                        </div>
                    </div>
                    <div className=' card-body'>
                        <BixialLIne />
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-3'>
                <div className='card h-100'>
                    <div className='card-body text-center'>
                        <div className=' d-flex justify-content-between flex-column h-100'>
                            <img src="https://srbthemes.kcubeinfotech.com/mirbal/html/ltr/assets/images/dashboard/social-media/upgrade-plan.png" 
                            alt="image-preview" loading='lazy' className=' img-fluid' />
                            <div className=' mt-auto'>
                                 <h5>Upgrade Your Plan..!</h5>
                            <p>Unlock powerful features to boost your social media performance insights.</p>
                            <button type='button' className='btn btn-danger'>Upgrade Now</button>
                            </div>
                        </div>
                           
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-3'>
                <div className='card bg-black text-white border-0 h-100'>
                    <div className='card-body'>
                        <span className=' badge bg-success float-end'>5.1%</span>
                        <h5 className=' fs-6 text-white mb-5'>Facebook Campaign</h5>
                        <p className=' text-opacity-25 mb-5'>Our latest Facebook campaign focuses on driving user 
                            engagement and brand.</p>
                        <div className='row text-center mb-5'>
                            <div className=' col-md-6'>
                                <div className=' border-end border-light'>
                                <h5>240</h5>
                                <p>Posts</p>
                            </div>
                            </div>
                            <div className=' col-6'>
                                 <h5>63%</h5>
                                <p>Engagement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       <div className=' custom-card mb-3'>
         <div className='card h-100'>
            <div className=' card-header bg-transparent'>
                <h5 className=' card-title'>Get Users List Search</h5>
                <div className=' position-relative'>
                    <input type="text"
                    className=' form-control'
                    value={search}
                    onChange={handleSearch}
                    placeholder='Search user...'
                    />
                    {search.length>0 && (
                        <button type='button'
                        className='btn btn-sm position-absolute top-50 
                        end-0 ms-2 
                        translate-middle-y'
                        onClick={()=>setSearch('')}
                        >
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>
                    )}
                </div>
            </div>
            <div className=' card-body'>
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
                        filterUsers.length > 0 ? (
                            filterUsers.slice(0, 5)?.map((user, index)=>(
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
                            <td colSpan="6" className='text-center'>NoData Found</td>
                          </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
            </div>
        </div>
       </div>

        </article>
     </section>
    )
}
export default DashboardComp