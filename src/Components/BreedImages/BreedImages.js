import React, { useEffect, useState } from 'react'

const BreedImages = () => {

    const [breeds, setBreeds] = useState([])
    const [selectedBreed, setSelectedBreed] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const fetchBreed = async () => {

        setLoading(true)
        setError(null)
        try {

            const breedNames = await fetch('https://dog.ceo/api/breeds/list/all')
            const resultNames = await breedNames.json()
            if(resultNames.status === 'success') {
                const nameBreeds = Object.keys(resultNames.message)
                setBreeds(resultNames.message)
                console.log(resultNames.message, 'breed names images')
            }

        } catch(err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBreed()
    }, [])

    return (

        <section className='p-0 bg-white'>
            <article className='container'>
                <div className='row align-content-center gx-5 g-2'>
                    <div className='p-3'>
                        <h2 className=' text-uppercase display-6 fw-lighter ps-3'>Welcome to the Breed Images
                            <span className=' d-block'>to the Display</span>
                        </h2>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default BreedImages