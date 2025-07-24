import React, { useState } from 'react'
import ThemeProvider from '../ThemeProvider/ThemeProvider'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, FormControl, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { object } from 'yup';

const Login = () => {

    const resetForm = {
        userName:'',
        password:''
    }

    const [login, setLogin] = useState({...resetForm})

    const navigate = useNavigate()

    const handleChange = (e) => {

        const { name, value } = e.target
        setLogin({...login, [name]: value})
        console.log(login, 'user-details')
    }

    const [error, setError] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(JSON.stringify(login, null, 2))
        const errors = {}
       
        if(!login.userName.trim()){
        errors.userName = 'Please enter UserName'
       }else if(!/^[a-zA-Z_@]+/.test(login.userName)){
        errors.userName = 'username contain number letter and space and underscore'
       }

       if(!login.password.trim()){
        errors.password = 'please enter password'
       }else if(login.password.length < 6){
        errors.password = 'Password must be at least 6 characters long.';
       }else if(!/[0-9]/.test(login.password)){
        errors.password = 'Please enter must one number'
       }
       if(Object.keys(errors).length === 0){
        navigate('/dashboard')
        console.log(login)
       }else{
        setError(errors)
       }
       setLogin(resetForm)
    }

    return (
        <main>
            <section className='info-login-screen'>
                <Container className='info-login'>
                    <Row className='info-login-data'>
                        <Col lg={4}>
                            <div className='info-login-bg '>
                                <h1 className='fs-4 display-6 fw-semibold text-center text-uppercase'>
                                    Welcome to the login page</h1>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label for="userName">Email address</Form.Label>
                                        <Form.Control type="text" name='userName' onChange={handleChange} 
                                        value={login.userName} placeholder="name@example.com" />
                                        {error.userName && <small className='text-danger'>{error.userName}</small>}
                                    </Form.Group>
                                    <Form.Group className='mb-3'>
                                        <Form.Label for="password">Password</Form.Label>
                                        <Form.Control type='password' name='password' value={login.password}
                                        onChange={handleChange} placeholder='type your password' />
                                        {error.password && <small className='text-danger'>{error.password}</small>}
                                    </Form.Group>
                                  <div className=''>
                                    <Button type='submit' className='btn login-btn'>Submit</Button>
                                  </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Login