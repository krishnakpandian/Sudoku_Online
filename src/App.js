import React from 'react';
import './App.css';
import {HashRouter as Router, Switch, Link} from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Sudoku from './Components/Sudoku/Sudoku.js';
function App() {
  return (
    <>
      <div>
        <Header/>
        Hello World
        <Sudoku/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
