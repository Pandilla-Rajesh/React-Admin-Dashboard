import React, { useEffect, useState } from 'react'

const Apis =()=>{

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getUser = async()=>{

        setLoading(true)
        setError("")
        try{

            const res = await fetch('https://dummyjson.com/users')
            if(!res.ok){
                throw new error('failed to fetch the data')
            }

            const data = await res.json()
            setUser(data.users)
            console.log(data.users, 'users data display')

        }catch(err){
            console.log(err)
            setError(err.message)
        }finally{
            setLoading(false)
        }

    }

    useEffect(()=>{
        getUser()
    }, [])

    return(
        <>
        <h2 className=' fs-3 fw-semibold'>user data display</h2>
        </>
    )
}
export default Apis