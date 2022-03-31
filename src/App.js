import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import Home from './Views/Home/Home';
import users from './services/users';


function App() {
  const [currentUser, setCurrentUser] = useState(users());
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Switch>
        {/* <Header /> */}
        <Route path='/'>
          <Home currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
