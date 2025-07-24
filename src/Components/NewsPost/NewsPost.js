import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const NewsPost=()=>{

    const [inputval, setInputVal] = useState('posts')
    const [list, setList] = useState([])

    const handleChange = (e)=>{
        setInputVal(e.target.value)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${inputval}`)
            .then((res) => res.json())
            .then((data) => {
                setList(data); 
                console.log(data, 'user post data');
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [inputval]);

    console.log(inputval)

    return(
       <section>
            <Container>
                <Row>
                    <Col lg={12}>
                       <div className='bg-white p-3 rounded-2'>
                       <h2 className='text-center'>User Post</h2>
                        <Form>
                            <div className='d-flex'>
                                <div className='form-check'>
                                    <input type='radio' className='form-check-input' value="posts"
                                    onChange={handleChange} checked={inputval === 'posts'} />
                                   <h6>Post</h6>
                                </div>
                                <div className='form-check'>
                                    <input type='radio' className='form-check-input' value="users"
                                    onChange={handleChange} checked={inputval === 'users'} />
                                   <h6>User</h6>
                                </div>
                            </div>
                        </Form>
                        <div>
                                {list?.map((el, index) => (
                                    <h5 key={index}>{el.title || el.email}</h5>
                                ))}
                            </div>
                       </div>
                    </Col>
                </Row>
            </Container>
       </section>
    )

}

export default NewsPost