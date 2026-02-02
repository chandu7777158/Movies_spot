import React from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';

function App() {
  // We create a fake array of 12 items to test our grid layout
  const tempMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <Navbar />
      
      <main className="container-fluid mt-2  px-4">
        <h2 className="mb-4 fw-bold">Trending Movies</h2>
        <div className="row">
          {tempMovies.map((item) => (
            <MovieCard key={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;