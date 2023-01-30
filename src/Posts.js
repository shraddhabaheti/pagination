import React from 'react';

const Posts = ({ item, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {item.map(item => (
        <li key={item.id} className='list-group-item'>
            <p>{item.id}</p>
          {item.username}
          <p>{item.email}</p>
          <p>{item.lastname}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
