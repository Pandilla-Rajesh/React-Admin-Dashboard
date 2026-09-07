import React, { useCallback } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const UserList = () => {
  const queryClient = useQueryClient();
  

  const fetchUsers = useCallback(async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    if (!response.ok) {
      throw new Error('Fetching error');
    }

    return response.json();
  }, []);

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5000,
  });

  const mutation = useMutation({
    mutationFn: (newUser) =>
      axios.post(
        'https://jsonplaceholder.typicode.com/users',
        newUser
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });

  const handleAdded = () => {
    mutation.mutate({
      name: 'Rajesh',
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch users</p>;

  return (
    <div className="container">
      <button
        className="btn btn-primary mb-3"
        onClick={handleAdded}
      >
        Add User
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address?.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;