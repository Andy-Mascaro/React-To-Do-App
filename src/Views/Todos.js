import React from 'react';
import { getTodos, renderTodo } from '../services/todos';
import { useState, useEffect } from 'react';
import users from '../services/users';


export default function Todos() {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const id = users();
  const [addLists, setAddLists] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const data = await getTodos();
        setList(data);
      } catch (e) {
        alert(e.message);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await renderTodo({ user_id: id, list: list });
    setAddLists('');
  };





  return (
    <div className='list'>
      {error && (
        <p>
          {error} <span onClick={() => setError('')}></span>
        </p>
      )}
      <h1>Your Personal List</h1>
      {list.map((lists) => (
        <div key={lists.id}>
          <h1>{lists.todo}</h1>
        </div>
      ))}
     
    </div>
  );
}
