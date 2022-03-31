import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signupUser } from '../../services/users';



export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [type, setType] = useState('sign-in');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      if (type === 'sign-in'){
        const data = await signInUser(email, password);
        setCurrentUser(data);
        history.push('/');
      } else {
        const data = await signupUser(email, password);
        setCurrentUser(data);
        history.push('/');
      } 
    } catch (e){
      setError(e.message);
    }
  };
  


  return (
    <div>
      <h1>
        <span className={type === 'sign-in' ? 'active' : ''} onClick={() => setType('sign-in')}>Sign In</span>
        <span className={type === 'sign-up' ? 'active' : ''} onClick={() => setType('sign-up')}>Sign Up</span>
        {error && <p>{error}</p>}
        <form className='auth' onSubmit={handleSubmit}>
          <label>
            Email:
            <input type='auth' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            Password:
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button>Enter</button>  
        </form>
      </h1>
    </div>
  );
}
