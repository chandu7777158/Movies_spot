import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies, searchMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';

const MoviePage = ({ category }) => {
    //Internally: First render → loading UI ,Effect Runs, Second render → movie UI
    //[category,query] An effect must re-run when the data it depends on changes
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { query } = useParams(); // Get search term from URL

    useEffect(() => {
        const loadMovies = async () => {
            setLoading(true);
            let data;
            if (category === 'search' && query) {
                data = await searchMovies(query);
            } else {
                data = await getMovies(category);
            }
            setMovies(data);
            setLoading(false);
        };
        loadMovies();
    }, [category, query]); // Re-run if category OR search query changes

    const displayTitle = category === 'search' 
        ? `Results for "${query}"` 
        : category === 'popular' ? 'Popular Movies' : `${category.charAt(0).toUpperCase() + category.slice(1)} Movies`;

    return (
        <div className="container-fluid px-3">
            {/*Dynamic headings added here*/}
            <h1 className="mt-0 mb-3 fw-bold" style={{ color: "#a5b7f8",textAlign:"center" }}>{displayTitle}</h1>
            <div className="row g-2">
                {loading ? (
                    <p>Searching...</p>
                ) : movies.length > 0 ? (
                    movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                ) : (
                    <div className="text-center mt-5">
                        <h3>No movies found for "{query}"</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoviePage;