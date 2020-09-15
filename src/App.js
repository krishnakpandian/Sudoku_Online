import React from 'react';
import './App.css';
import {HashRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Sudoku from './Components/Sudoku/Sudoku.js';
import Join from './Components/Join/Join.js';
import Chat from './Components/Chat/Chat.js';
import FirebaseLogin from './Components/Firebase/FirebaseLogin.js';
function App() {
  return (
    <>
      <div>
      <Router>
          <Header/>
          <Switch>
            <Route path="/online">
              <Sudoku/>
              <Chat name="krishna"/>
            </Route>
            <Route path="/join">
              <FirebaseLogin/>
              <Join/>
            </Route>
          </Switch>
          <Footer/>
      </Router>
      </div>
    </>
  );
}

export default App;
