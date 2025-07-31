import React, { useState } from 'react'
import react from 'react'
import { Suspense } from 'react'

const LazyComponent = React.lazy(()=>Promise.resolve({
    default:()=> 
        <React.Fragment>
            <h2>This is a Lazy Load Component</h2>
        </React.Fragment>
}))

const LazyLoadComponent=()=>{

    const [showComp, setShowComp] = useState(false)

    const handleShow=()=>{
        setShowComp(true)
    }

    return(
        <React.Fragment  style={{ padding: '2rem', fontFamily: 'Arial' }}>
            <h1>Lazy loading with suspense and promise function</h1>
            <button onClick={handleShow}>Load Componet</button>
            {showComp && (
                <Suspense fallback={<div>...Loading</div>}>
                    <LazyComponent/>
                </Suspense>
            )}
        </React.Fragment>
    )
}

export default LazyLoadComponent