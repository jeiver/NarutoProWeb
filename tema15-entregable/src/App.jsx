
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

import Header from './Components/Header/Header';

import HomePage from "./Pages/HomePage/HomePage";

function App() {

  return (
    <>
      <div className='App'>
        <Header />
        <HomePage />

      </div>
    </>
  )
}

export default App
