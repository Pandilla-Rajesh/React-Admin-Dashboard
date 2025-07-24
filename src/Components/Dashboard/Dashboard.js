import React, { useEffect, useRef } from 'react'
import BarCharts from './BarCharts'

const Dashboard = () => {

    const cusref = useRef(null)

    useEffect(() => {
        cusref.current.focus()
    }, [])

    return (
        <section >
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-md-8 col-lg-8 col-sm-12'>
                        <div className='card bg-white p-3 rounded-5 border-0 shadow-sm'>
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
                        <div className='card rounded-5 border-0 shadow-sm p-3 mb-3'>
                            <div className='card-title'>
                                Traffic Distribution
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className='card-footer'>
                                <small className='card-body-secondary'>Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className='card rounded-5 border-0 shadow-sm p-3'>
                            <div className='card-title'>
                                Product Sales
                            </div>
                            <div className='card-body'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col py-3'>
                        <h4 className='text-dark'>Responsive table</h4>
                    </div>

                    <div className='table-responsive rounded-5 p-3 bg-white'>
                        <table className='w-100 table-striped table'>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="0">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Dashboard