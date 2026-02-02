import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';

function App() {
  // 1. Create a state to track the current category
  const [category, setCategory] = useState('Trending');

  // Temporary array to simulate movies
  const tempMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="bg-light min-vh-100">
      {/* 2. We will eventually pass setCategory to Navbar to change this title */}
      <Navbar />
      
      <main className="container-fluid pt-5 px-4">
        {/* Dynamic Title based on selection */}
        <h2 className="mb-4 fw-bold mt-4">{category} Movies</h2>
        
        <div className="row g-3"> {/* g-3 adds nice gap between cards */}
          {tempMovies.map((item) => (
            <MovieCard key={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;