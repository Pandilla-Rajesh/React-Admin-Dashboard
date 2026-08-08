import React, { Suspense } from 'react'
import react from 'react'

const LazyComp = ()=>{
    
    const DashboardComp = React.lazy(()=>import('./DashboardComp'))

    return(
        <>
            <div>
                <h2>Home Page</h2>
                <Suspense fallback={<div>...Loading</div>}>
                    <DashboardComp/>
                </Suspense>
            </div>
        </>
    )
}
export default LazyComp