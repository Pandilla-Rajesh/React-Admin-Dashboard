import react, { useEffect, useState } from 'react'

const useFetchsData = (urls) =>{

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{

        const fetchDatas = async () =>{

            setLoading(true)

            try{

                const responses = await Promise.all(
                    urls.map((url) => fetch(url))
                )

                if(!responses.ok){
                    throw new Error('failed to the fetch data')
                }

                const result = await Promise.all(
                    responses.map((res) => res.json())
                )

                setData(result)
                console.log(result, 'all responses')

            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }

        fetchDatas()
        
    }, [urls])

    return {data, loading, error}

}

export default useFetchsData