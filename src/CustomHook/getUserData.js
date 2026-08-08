import React, { useState } from 'react';
import useFetch from './CustomHook';

const Users = () => {

  const [count, setCount] = useState(0)
  const [name, setName] =  useState('')

  const { users, error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <h2>...Loading</h2>;
  if (error) return <h2>{error}</h2>;

  function JsxCom() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h6', 
        null, 
        'JSX Element',
      ),
      React.createElement(
        'h2',
        null,
        'React Element'
      )
      
    );
  }



  const handleClick = () =>{
    setCount((prev) => prev +100)
    setCount((prev) => prev +1)
      setCount((prev) => prev +1)
      setName('Rajesh Pandilla')
  }


  return (
    <>
      <h2>Welcome custom hook data</h2>

        <div className='card mb-3'>
          <div className=' card-body'>
              <h2>{count}</h2>
              <h3>{name}</h3>
              <button onClick={handleClick} className=' btn btn-danger'>Update</button>
          </div>
        </div>

      <div className="row g-3 mb-3">
        {users.map((user) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            key={user.id}
          >
            <div className="card h-100">
              <div className="card-body">
                <p>{user.id}</p>

                <JsxCom />

                <h2>{user.name}</h2>
                <h3>{user.username}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;