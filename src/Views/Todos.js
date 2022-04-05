import { getTodos, renderTodo, complete } from '../services/todos';
import { useState, useEffect } from 'react';
import './Todos.css';
import { deleteTodo } from '../services/todos';

export default function Todos() {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const [todo, setAddLists] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const data = await getTodos();
        setList(data);
      } catch (e) {
        setError('Did not import list');
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try { 
      await renderTodo({ todo });
      history.go(0);
    } catch (e) {
      setError('Did not add to list');
    }


  };

  const finish = async (info) => {
    try {
      await complete({ ...info, complete:true });
      history.go(0);
    } catch (e) {
      setError('Failed to complete');
    }
  };
   
//   const handleRemoveItem = (e) => {
//     const name = e.target.getAttribute('name');
//     deleteTodo(list.filter(item => item.name !== name));
  
  const removeTodo = async (id) => {
    await deleteTodo(id);
    const remove = await getTodos();
    setList(remove);
  };

    

  
  return (
    <div className='list'>
      
      <div>  
        <label><input type='text' value= {todo} onChange={(e) => setAddLists(e.target.value)}/></label>
        <button onClick={handleSubmit}>Add New</button>
       
      </div>
      {error && (
        <p>
          {error} <span onClick={() => setError('')}></span>
        </p>
      )}
      <h1>Your Personal List</h1>
      {list.map((lists) => (
        <div key={lists.id}>
          <h1 className={lists.complete ? 'completed' : ''} onClick={ () => finish(lists)}>{lists.todo}</h1>
          <button onClick={() => removeTodo(lists.id)}>Remove</button>
        </div>
        
      ))}
     

    </div>
  );
}
