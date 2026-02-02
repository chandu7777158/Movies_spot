import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <Router>
      <Navbar />
      < className="mt-5 pt-3">
        <Routes>
          <Route path="/" element={<MoviePage category="popular" />} />
          <Route path="/tollywood" element={<MoviePage category="tollywood" />} />
          <Route path="/sandalwood" element={<MoviePage category="sandalwood" />} />
          <Route path="/mollywood" element={<MoviePage category="mollywood" />} />
          <Route path="/kollywood" element={<MoviePage category="kollywood" />} />
          <Route path="/bollywood" element={<MoviePage category="bollywood" />} />
          <Route path="/search/:query" element={<MoviePage category="search" />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;