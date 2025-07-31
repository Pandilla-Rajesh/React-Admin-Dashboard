import React, { useEffect, useRef, useState } from 'react'
import BarCharts from './BarCharts'
import { useTheme } from '../../ContextMain'

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

    const colorHandle = (nbox, setNbox) => {
        setNbox(nbox === 'block' ? 'green' : 'block')
    }

    const handleColor = (box, setBox) => {
        setBox(box === 'red' ? 'white' : 'red');
    };

    const getTodo = async () => {
        try {
            const response = await api.get('/todos')
            setTodo(response.data)
            console.log(response.data, 'todo data displayed')
        } catch (err) {
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
                                    <h5 className='text-dark mb-0' ref={cusref}>Profit & Expenses</h5>
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
                                <div style={{ padding: '20px' }}>

                                    {/* boxes */}

                                    <div className='info-box'>
                                        <div className='info-box-design'>
                                           <div>
                                             <div className='box' style={{
                                                width: '100px',
                                                height: '100px',
                                                padding: '10px',
                                                marginBottom: '12px',
                                                borderRadius: '6px',
                                                backgroundColor: nbox1,
                                            }}>
                                                <h2>Box1</h2>
                                                
                                            </div>
                                           <div>
                                             <button onDoubleClick={() => colorHandle(nbox1, setNbox1)}>
                                                    Chage Box1</button>
                                           </div>
                                           </div>
                                            <div className='box'>
                                                <h2>Box2</h2>
                                                <button>Chage Box2</button>
                                            </div>
                                            <div className='box'>
                                                <h2>Box3</h2>
                                                <button>Chage Box3</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* end */}
                                    <div style={{
                                        width: '100px',
                                        height: '100px',
                                        padding: '10px',
                                        marginBottom: '12px',
                                        borderRadius: '6px',
                                        backgroundColor: box1,
                                    }}>
                                        <span>Box1</span>
                                    </div>
                                    <button onClick={() => handleColor(box1, setBox1)}>
                                        Change Box1
                                    </button>

                                    <div style={{
                                        width: '100px',
                                        height: '100px',
                                        padding: '10px',
                                        marginBottom: '12px',
                                        borderRadius: '6px',
                                        backgroundColor: box2,
                                    }}>
                                        <span>Box1</span>
                                    </div>
                                    <button onClick={() => handleColor(box2, setBox2)}>
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
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col py-3'>
                        <h4 className='text-dark'>Todo List Display Third Prty API Integration</h4>
                    </div>

                    <div className='rt-card'>
                        <div className='table-responsive p-3'>
                            {loading ? (
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
                                            {todos?.length > 0 ? (
                                                todos.slice(0, 10)?.map((todo, index) => (
                                                    <tr key={todo.id}>
                                                        <td>{todo.id}</td>
                                                        <td>{todo.userId}</td>
                                                        <td>{todo.title}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <>
                                                    <tr key="">
                                                        <td colSpan="5">No Data found</td>
                                                    </tr>
                                                </>
                                            )}
                                        </tbody>
                                    </table>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Dashboard