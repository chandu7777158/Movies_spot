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
          <Route path="/sandalwood" element={<MoviePage category="sandalwood" />} />
          <Route path="/kollywood" element={<MoviePage category="kollywood" />} />
          <Route path="/mollywood" element={<MoviePage category="mollywood" />} />
          <Route path="/bollywood" element={<MoviePage category="bollywood" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;