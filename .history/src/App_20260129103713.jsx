import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <Router>
      <Navbar />
      
    </Router>
  );
}

export default App;