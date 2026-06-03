import Password from 'antd/es/input/Password'
import { sign, signIn } from 'fontawesome'
import React, { useCallback, useMemo, useState } from 'react'
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

    // const isFormValid =
    // formData.username.trim() && formData.Password.trim()

    const isFormValid = useMemo(()=>{
        return(
            formData.username.trim() !== "" &&
            formData.Password.trim() !== ""
        )
    }, [formData.username, formData.Password])

    const handleSubmit = useCallback((e)=>{
        e.preventDefault()
        const errors = {}
        
        if(!formData.username.trim()){
            errors.username = 'Please enter username'
        }else if(!/^[a-zA-Z0-9_@]+$/.test(formData.username)){
            errors.username = 'username contain under score with numbers'
        }

        if(!formData.Password.trim()){
            errors.Password = 'please enter password'
        } else if(formData.Password.length < 6){
            errors.Password = 'please enter must be at least six characters'
        }

        // setError(errors)

         alert(JSON.stringify(formData, null, 2))

         if(Object.keys(errors).length === 0){
            navigate('/dashboard')
         }else{
            setError(errors)
         }

    }, [formData])

    return(
       <section className='info-sign-hero'>
         <article className=' container ms-auto vh-100'>
            <div className='info-sign-page row'>
                <div className=' col-md-5 col-xl-5 col-lg-5 col-sm-12'>
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
                                {error.username && 
                                <small className=' text-white'>
                                    {error.username}</small>}
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
                                <p>{error.Password && 
                                    <small className='text-white'>
                                    {error.Password}</small>}</p>
                            </div>
                            <div>
                                <button 
                                type='submit' 
                                className='btn btn-dark w-100'
                                disabled={!isFormValid}
                                // disabled={!formData.username.trim() || !formData.Password.trim()}
                                >
                                    {isFormValid ? 'Submit' : 'Login'}
                                </button>
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