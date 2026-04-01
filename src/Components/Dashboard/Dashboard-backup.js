import React, { useEffect, useMemo, useRef, useState } from 'react'
import BarCharts from './BarCharts'
import { useTheme } from '../../ContextMain'
import { Button } from 'react-bootstrap'
import Greeting from '../Greeting'

const Dashboard = () => {

    const cusref = useRef(null)

    const { api } = useTheme()
    const [todos, setTodo] = useState([])
    const [loading, setLoading] = useState(false)

    const [box1, setBox1] = useState('red')
    const [box2, setBox2] = useState('red')
    const [box3, setBox3] = useState('red')

    const [nbox1, setNbox1] = useState('blue')
    const [nbox2, setNbox2] = useState('blue')
    const [nbox3, setNbox3] = useState('blue')

    const [count, setCount] = useState(0)
    const [name, setName] = useState(true)

    const handleColor = (box, setBox) => {
        setBox(box === 'green' ? 'white' : 'green');
    };

    const user = useMemo(() => ({ name: 'Rajesh Pandilla' }), [])
    useEffect(() => {
        console.log('the efffect runs once');

    }, [user])

    useEffect(() => {
        const timer = setTimeout(() => {
            setName('Ushasri')
            document.title = `Count Updated Click ${count}`
            // document.title = `Title changed the name ${name}`
            console.log(count + 1, 'count value displaed')
            console.log(name, 'change the name')
        }, 500)
        return () => clearTimeout(timer)
    }, [count]
    )

    function handleIncrement() {
        setTimeout(() => {
            setCount((prev) => {
                const updatedValue = prev + 1
                console.log(updatedValue, 'count updated');
                return updatedValue

            })
        }, 1000)
    }

    // const handleIncrement = () => {
    //     setCount((prev) => prev + 1)
    // }

    const colorHandle = (nbox, setNbox) => {
        setNbox(nbox === 'block' ? 'green' : 'block')
    }

    const getTodo = async () => {
        try {
            const response = await api.get('/todos')
            setTodo(response.data)
            console.log(response.data, 'todo data displayed')
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getTodo()
    }, [])

    // useEffect(() => {
    //   setLoading(true);
    //   api.get('/todos')
    //     .then((res) => {
    //       console.log(res, 'todo list');
    //       setTodo(res.data); 
    //     })
    //     .catch((err) => console.log(err))
    //     .finally(() => setLoading(false));
    // }, [api]);


    // useEffect(() => {
    //     cusref.current.focus()
    // }, [])



    return (
        <section >
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-md-8 col-lg-8 col-sm-12'>
                        <div className='card bg-white p-3 border-0 shadow-sm'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div>
                                    <h5 className='text-dark mb-0' ref={ cusref }>Profit & Expenses</h5>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className='w-100'>
                                <BarCharts />
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 col-lg-4 col-sm-12 dash-board'>
                        <div className='rt-card border-0 p-3 mb-3'>
                            <div className='card-title'>
                                Three Boxes chnage the bg color
                                <div style={ { padding: '20px' } }>

                                    {/* boxes */ }

                                    <div className='info-box'>
                                        <div className='info-box-design'>
                                            <div>
                                                <div className='box' style={ {
                                                    width: '100px',
                                                    height: '100px',
                                                    padding: '10px',
                                                    marginBottom: '12px',
                                                    borderRadius: '6px',
                                                    backgroundColor: nbox1,
                                                } }>
                                                    <h2>Box1</h2>

                                                </div>
                                                <div>
                                                    <button onClick={ () => colorHandle(nbox1, setNbox1) }>
                                                        Chage Box1 New</button>
                                                </div>
                                            </div>
                                            <div className='box'>
                                                <h2>Box2</h2>
                                                <button>Chage Box2</button>
                                            </div>
                                            <div className='box'>
                                                <h2>Box3</h2>
                                                <button>Chage Box3</button>
                                                <div>Count:{ count }</div>
                                                <button onClick={ handleIncrement }>Increment</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* end */ }
                                    <div style={ {
                                        width: '100px',
                                        height: '100px',
                                        padding: '10px',
                                        marginBottom: '12px',
                                        borderRadius: '6px',
                                        backgroundColor: box1,
                                    } }>
                                        <span>Box1</span>
                                    </div>
                                    <button onClick={ () => handleColor(box1, setBox1) }>
                                        Color Change Box1
                                    </button>

                                    <div style={ {
                                        width: '100px',
                                        height: '100px',
                                        padding: '10px',
                                        marginBottom: '12px',
                                        borderRadius: '6px',
                                        backgroundColor: box2,
                                    } }>
                                        <span>Box1</span>
                                    </div>
                                    <button onClick={ () => handleColor(box2, setBox2) }>
                                        Change Box2
                                    </button>

                                </div>
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className='card-footer'>
                                <small className='card-body-secondary'>Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className='rt-card border-0 p-3'>
                            <div className='card-title'>
                                Product Sales
                            </div>
                            <div className='card-body'>
                                <Greeting
                                    name='Rajesh' role='SSE UI' exp='8Yrs'
                                    user={ {
                                        fname: "Rajesh Pandilla",
                                        email: "rajesh@example.com",
                                        age: 30,
                                        address: { city: "Hyderabad" }
                                    } }

                                    techskills={ {
                                        skills: 'HTML, CSS, SASS, React js, Javascript, Figma, Photoshop,',
                                        frame: 'Tailwindcss, Material UI, Bootstrap',
                                        ui: 'Figma, Photoshop'
                                    } }

                                />
                                <div> { name ? 'Rajesh Pandilla' : 'Ushasri Pandilla' }</div>
                                <Button onClick={ () => setName(!name) }>Name Changed</Button>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col py-3'>
                        <h4 className='text-dark'>Todo List Display Third Prty API Integration</h4>
                    </div>

                    <div className='rt-card'>
                        <div className='table-responsive p-3'>
                            { loading ? (
                                <>
                                    <p>...Loading</p>
                                </>
                            ) : (
                                <>
                                    <table className='table table-bordered'>
                                        <thead>
                                            <tr key="">
                                                <th>Id</th>
                                                <th>userId</th>
                                                <th>Title</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { todos?.length > 0 ? (
                                                todos.slice(0, 10)?.map((todo, index) => (
                                                    <tr key={ todo.id }>
                                                        <td>{ todo.id }</td>
                                                        <td>{ todo.userId }</td>
                                                        <td>{ todo.title }</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <>
                                                    <tr key="">
                                                        <td colSpan="5">No Data found</td>
                                                    </tr>
                                                </>
                                            ) }
                                        </tbody>
                                    </table>
                                </>
                            ) }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Dashboard