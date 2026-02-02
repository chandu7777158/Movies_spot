import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('Trending Movies');

  // Function to fetch movies based on type (Discover vs Search)
  const fetchMovies = async (endpoint, params = "") => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}${params}`);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial Load: Show Trending
  useEffect(() => {
    fetchMovies('/trending/movie/day');
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <Navbar onCategorySelect={(category, code) => {
          setTitle(`${category} Movies`);
          fetchMovies('/discover/movie', `&with_original_language=${code}`);
      }} />
      
      <main className="container-fluid mt-3 px-4 pt-5">
        <h2 className=" fw-bold ">{title}</h2>
        <div className="row g-3">
          {loading ? (
            <p>Loading movies...</p>
          ) : (
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;