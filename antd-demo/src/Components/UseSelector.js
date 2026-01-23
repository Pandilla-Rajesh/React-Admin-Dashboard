import { Typography } from 'antd'
import React, { useState } from 'react'

const UseSelector=()=>{

    const counter =useState('')

    return(
        <>
           <div className='text-center'>
            <Typography.Title level={1}>
                    Welcome to the UseSelector component
            </Typography.Title>
               
           </div>
        </>
    )
}

export default UseSelector