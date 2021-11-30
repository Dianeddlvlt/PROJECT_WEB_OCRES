import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Maths from './pages/Maths';
import Physique from './pages/Physique';
import Chimie from './pages/Chimie';
import Programmation from './pages/Programmation';
import Methodologie from './pages/Methodologie';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/maths' exact element={<Maths/>} />
        <Route path='/physique' exact element={<Physique/>} />
        <Route path='/programmation' exact element={<Programmation/>} />
        <Route path='/methodologie' exact element={<Methodologie/>} />
        <Route path='/chimie' exact element={<Chimie/>} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
