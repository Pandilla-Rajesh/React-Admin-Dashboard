import { Button } from 'antd'
import React, { useState } from 'react'

const ParentComp = () =>{

    const [count, setCount] = useState(0)

    const handleCount = () =>{
        setCount((prev) => prev + 1)
    }

    return (

        <>
            <h2>Welcome to the parent to child interaction</h2>
            <ComponentA count={count} onInCrease={handleCount}/>
            <Button onClick={handleCount}>count</Button>
            <ComponentB count={count} />
           
        </>
    )
}

function ComponentA({count, onInCrease}){

    return (
        <>
            <h1>Welcome to the ComponentA</h1>
            <p>Count:{count}</p>
             {/* <Button onClick={onInCrease}>Count</Button> */}

        </>
    )
}

function ComponentB({onInCrease, count}){

    return(
        <>
            <h2>Welcome to the ComponentB</h2>
            <h1>Count: {count}</h1>
           {/* <Button onClick={onInCrease}>Count</Button> */}
        </>
    )
}

export default ParentComp