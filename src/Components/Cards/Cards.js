import React, { useEffect, useState } from 'react'

const Cards = () =>{

    const [hookList, setHookList] = useState([
        
        {name:'useState', bgClass: 'bg-primary text-white'},
        {name:'useEffect', bgClass:'bg-secondary text-white'},
        {name:'useRef', bgClass:'bg-success text-white'},
        {name:'useMemo', bgClass:'bg-danger text-white'},
        {name:'useCallback', bgClass:'bg-warning text-white'},
        {name:'useReducer', bgClass:'bg-info text-dark'},
        {name:'useContext', bgClass:'bg-dark text-white'},
        {name:'CustomHook', bgClass:'bg-light text-dark'}
    ])
    const [loading, setLoading] = useState(false)
    const [todo, setTodos] = useState([])
    const getTodo = async()=>{
     
       setLoading(true)
       const res = await fetch('https://dummyjson.com/todos')
       const data = await res.json()
       setTodos(data.todos)
       console.log(data.todos, 'todos list display')
       
    }

        useEffect(()=>{
        getTodo()
    }, [])

        useEffect(()=>{
        setLoading(true)
        try{

            setHookList(hookList)
            console.log(hookList, 'display the hook list')

        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }, [hookList])


    return(
       <section className=" bg-white p-3">
         <article className=' container ms-auto'>
            {/* dynamic-data-display */}
            <div className='row align-items-center g-3 mb-3'>
                {loading ? (
                    <p>...Loading</p>
                ) : (
                    hookList.length>0?(
                        hookList.map((hook, index) =>(
                            <div className=' col-lg-4 col-md-2 col-xxl-4 col-xl-3 col-1 col-sm-2'>
                                <div className={`card h-100 ${hook.bgClass}`}>
                                    <div className=' card-body'>
                                        <h2 className=' fs-6 text-center mb-0'>{hook.name}</h2>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                      <p>No Data Found</p>
                    )
                )}
            </div>
            {/* end */}

            {/* api-integration */}
                
                <div className=' card h-100'>
      
                            <div className=' card-body'>
                                <div className=' table-responsive'>
                                    <table className=' table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>todo</th>
                                                <th>completed</th>
                                                <th>userId</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <p>...Loading</p>
                                            ) : (
                                                todo.length>0?(
                                                    todo.slice(0, 20).map((list, index)=>(
                                                        <tr key={index}>
                                                            <td>{list.id}</td>
                                                            <td>{list.todo}</td>
                                                            <td>{list.completed}</td>
                                                            <td>{list.userId}</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="5" className=' text-center'>
                                                            <p>No Data Found</p>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                           
                </div>
                
            {/* end */}

         </article>
       </section>
    )
}

export default Cards