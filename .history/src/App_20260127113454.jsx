import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="mt-5 pt-4">
        <Routes>
          <Route path="/" element={<MoviePage category="popular" />} />
          <Route path="/tollywood" element={<MoviePage category="tollywood" />} />
          <Route path="/bollywood" element={<MoviePage category="bollywood" />} />
          <Route path="/kollywood" element={<MoviePage category="kollywood" />} />
          <Route path="/mollywood" element={<MoviePage category="mollywood" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;