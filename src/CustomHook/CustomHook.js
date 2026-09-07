import React, { useEffect, useState } from 'react'

function useFetch(url){

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{

        const fetchUsers = async() =>{
            setLoading(true)
            try{

                const response = await fetch(url)

                if(!response.ok){
                    throw new Error('failed to the fetch data error')
                }

                const data = await response.json()
                setUsers(data)
                console.log(data, 'users data fetched')

            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }

       fetchUsers()

    }, [url])

     return {users, error, loading}
}

export default useFetch