import React, { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [type, setType] = useState('sign-in');

  const handleSubmit = async () => {
    if (type === 'sign-in'){
      const resp = await signInUser(email, password);
    } else {
      const resp = await signUpUser(email, password);
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
          <button>Sign In</button>  
        </form>
      </h1>
    </div>
  );
}
