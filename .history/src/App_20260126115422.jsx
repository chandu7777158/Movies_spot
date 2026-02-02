import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

function MovieDisplay({ type }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { query } = useParams(); // For search later

  const fetchMovies = async () => {
    setLoading(true);
    let url1 = "";
    let url2 = "";

    // Define URLs based on category
    if (type === 'popular') {
      url1 = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`;
      url2 = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=2`;
    } else {
      // mapping for woods
      const codes = { tollywood: 'te', bollywood: 'hi', kollywood: 'ta', mollywood: 'ml', sandalwood: 'kn' };
      url1 = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${codes[type]}&page=1`;
      url2 = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${codes[type]}&page=2`;
    }

    try {
      const [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      
      // Combine results to show 40 movies (20+20)
      setMovies([...(data1.results || []), ...(data2.results || [])].slice(0, 30));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [type]); // Re-fetch when URL changes

  return (
    <div className="row g-3">
      {loading ? <div className="text-center mt-5">Loading...</div> : 
        movies.map(m => <MovieCard key={m.id} movie={m} />)
      }
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container-fluid mt-5 pt-4 px-4">
        <Routes>
          <Route path="/" element={<MovieDisplay type="popular" />} />
          <Route path="/tollywood" element={<MovieDisplay type="tollywood" />} />
          <Route path="/bollywood" element={<MovieDisplay type="bollywood" />} />
          <Route path="/kollywood" element={<MovieDisplay type="kollywood" />} />
          <Route path="/mollywood" element={<MovieDisplay type="mollywood" />} />
          <Route path="/sandalwood" element={<MovieDisplay type="sandalwood" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;