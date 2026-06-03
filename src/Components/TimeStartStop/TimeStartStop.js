import { running } from 'fontawesome'
import React, { useEffect, useState } from 'react'

const TimeStartStop = ()=>{

    const [time, setTime] = useState(0)
    const [isRuning, setIsRuning] = useState(false)
    const [currentDate, setCurrentDate] = useState(new Date())


    useEffect(()=>{

       if(isRuning){

        const interval = setInterval(()=>{
            setTime((prev) => prev + 1)
            setCurrentDate(new Date())
        }, 100)

        return () => clearInterval(interval)
       }else{
        setTime(0)
       }

    }, [isRuning])

    return(
        <>
            <div>
                <h2 className=' text-dark fs-3'>Timer: {time} Start</h2>
                <h3 className=' text-danger'>Date: {currentDate.toLocaleString()}</h3>
                <div>
                    {/* <button 
                    className='btn btn-success'
                    disabled={isRuning}
                    onClick={() => setIsRuning(true)}>Start</button>
                    <button
                    className='btn btn-danger'
                    onClick={() => setIsRuning(false)}
                    disabled={!isRuning}
                    >Stop</button> */}
                    <button
                     className={`btn ${isRuning ? 'btn-success' : 'btn-danger'}`}
                     onClick={() => setIsRuning(!isRuning)}
                     disabled={isRuning && !isRuning}
                    >
                        {isRuning ? 'Start' : 'Stop'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default TimeStartStop