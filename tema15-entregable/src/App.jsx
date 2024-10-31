
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

import Header from './Components/Header/Header';

import HomePage from "./Pages/HomePage/HomePage";
import FavPage from "./Pages/FavPage/FavPage";

function App() {

  return (
    <>
      <div className='App'>
      <Router>
        <Header/>
        <Routes className="contenido">
          <Route path="/" element={<HomePage />} />
          <Route path="/fav" element={<FavPage />} />
        </Routes>
      </Router>

      </div>
    </>
  )
}

export default App
