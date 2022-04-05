import React from 'react';
import { logout } from '../services/users';

export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };
  return (
    <div className='header'>
      {currentUser && 
      <div onClick={handleLogout}>
        <button className='out' >Logout</button>
      </div>
      }
    </div>
  );
}
