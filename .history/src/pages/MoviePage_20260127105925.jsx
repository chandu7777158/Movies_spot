import React, { useState, useEffect } from 'react';
import { getMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';

const MoviePage = ({ category }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Format the title: 'tollywood' -> 'Tollywood Movies'
    const displayTitle = category === 'popular' ? 'Popular Movies' : `${category.charAt(0).toUpperCase() + category.slice(1)} Movies`;

    useEffect(() => {
        const loadMovies = async () => {
            setLoading(true);
            const data = await getMovies(category);
            setMovies(data);
            setLoading(false);
        };
        loadMovies();
    }, [category]);

    return (
        <div className="container-fluid px-2">
            {/* Dynamic Heading added here */}
            <h1 className="mt-3 mb-4 fw-bold text-dark border-bottom pb-2">{displayTitle}</h1>
            
            <div className="row g-3">
                {loading ? (
                    <div className="text-center mt-5">
                        <div className="spinner-border text-primary" role="status"></div>
                        <p className="mt-2">Fetching Movies...</p>
                    </div>
                ) : (
                    movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                )}
            </div>
        </div>
    );
};

export default MoviePage;