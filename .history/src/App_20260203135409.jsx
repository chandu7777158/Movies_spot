import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    // Links in Navbar component and Routes also, Links and Routes must present in BrowserRouter
    //The Link to="strings" for browser url change, and path="string" must match then component renders correctly 
    <BrowserRouter>
      <Navbar />
      <main className="mt-5 pt-3">
        <Routes>
          <Route path="/" element={<MoviePage category="popular" />} />
          <Route path="/tollywood" element={<MoviePage category="tollywood" />} />
          <Route path="/sandalwood" element={<MoviePage category="sandalwood" />} />
          <Route path="/mollywood" element={<MoviePage category="mollywood" />} />
          <Route path="/kollywood" element={<MoviePage category="kollywood" />} />
          <Route path="/bollywood" element={<MoviePage category="bollywood" />} />
          <Route path="/search/:query" element={<MoviePage category="search" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;