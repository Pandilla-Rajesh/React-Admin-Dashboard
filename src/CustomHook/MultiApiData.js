import react from 'react'
import useFetchsData from './CustomMultiApis'

const MultiData = ()=>{

   const {data, loading, error} = useFetchsData(
    [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/todos'
    ]
   )

   if(loading) return <p>...Loading</p>
   if(error) return <p>{error}</p>

   const [users, posts, todos] = data

    return(
        <>
            <div className=' card h-100'>
                <div className=' card-body'>
                     <h2>Users: {users?.length || 0}</h2>
            <h2>Posts: {posts?.length || 0}</h2>
            <h2>Todos: {todos?.length || 0}</h2>
                </div>
            </div>
        </>
    )

}
export default MultiData