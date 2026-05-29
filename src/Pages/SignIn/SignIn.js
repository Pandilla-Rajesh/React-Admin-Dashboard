import Password from 'antd/es/input/Password'
import { sign, signIn } from 'fontawesome'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = ()=>{

    const [formData, setFormData] = useState({
        username:'',
        Password:''
    })
    const [otpSent, setOtpSent] = useState(false)
    const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})

    const navigate = useNavigate()

    const handleChange = useCallback((e)=>{
        const {name, value} = e.target
        setFormData((prev) =>({
            ...prev, [name]: value
        }))
        console.log(formData, 'display the signin details')
    }, [])

    const handleSubmit = useCallback((e)=>{
        e.preventDefault()
        alert(JSON.stringify(formData, null, 2))
        const errors = {}
        if(!formData.username.trim()){
            error.username = 'Please enter username'
        }
    })

    return(
       <section className='info-sign-hero'>
         <article className=' container ms-auto vh-100'>
            <div className='info-sign-page row'>
                <div className=' col-md-4 col-xl-4 col-lg-4 col-sm'>
                    <div className='info-sign-view'>
                        <h2>Welcome to the Signin Page</h2>
                        <form action="" onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label for="" className=' form-label'>UserName</label>
                                <input type="text" 
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                                className=' form-control'
                                placeholder='Enter UserName' />
                                {error.username && <small className=' text-danger'>{error.username}</small>}
                            </div>
                            <div className='mb-3'>
                                <label for="" className='form-label'>Password</label>
                                <input 
                                type="password"
                                 className=' form-control'
                                 onChange={handleChange}
                                 name='Password'
                                 value={formData.Password}
                                 placeholder='enter password'
                                />
                            </div>
                            <div>
                                <button type='submit' className='btn btn-dark w-100'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </article>
       </section>
    )
}

export default SignIn