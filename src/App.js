import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Views/Home/Home';
import users from './services/users';
import Todos from './Views/Todos';
import { Redirect } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState(users());
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Switch>
       
        <Route exact path='/'>
          <Home setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path='/todos'>
          {currentUser ? <Todos /> : <Redirect to= '/'/>} 
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
