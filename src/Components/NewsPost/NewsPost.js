import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const NewsPost = () => {

    const [inputval, setInputVal] = useState('posts')
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setInputVal(e.target.value)
    }

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/${inputval}`)
            .then((res) => res.json())
            .then((data) => {
                setList(data);
                console.log(data, 'user post data');
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [inputval]);

    console.log(inputval)

    return (
        <section>
            <Container>
                <Row>
                    <Col lg={ 12 }>
                        <div className='bg-white p-3 rounded-2'>
                            <h2 className='text-center'>User Post</h2>
                            <Form>
                                <div className='d-flex'>
                                    <div className='form-check'>
                                        <input type='radio' className='form-check-input' value="posts"
                                            onChange={ handleChange } checked={ inputval === 'posts' } />
                                        <h6>Post</h6>
                                    </div>
                                    <div className='form-check'>
                                        <input type='radio' className='form-check-input' value="users"
                                            onChange={ handleChange } checked={ inputval === 'users' } />
                                        <h6>User</h6>
                                    </div>
                                </div>
                            </Form>
                            <div>
                                {/* {loading ? (
                                    <p>...Loading</p>
                                ):(
                                    list.length > 0 ?(
                                        list.slice(0, 7).map((el, id)=>(

                                            <div className='card h-100' key={list.id}>
                                                <div className=' card-body'>
                                                    {}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No Data Found</p>
                                    )
                                )} */}
                                {list.slice(0,7)?.map((el, index) => (
                                    <h5 key={ index }>{ el.title || el.username || el.website }</h5>
                                )) }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default NewsPost