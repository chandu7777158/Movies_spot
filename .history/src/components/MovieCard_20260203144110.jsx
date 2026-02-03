import React from 'react';
// We destructure { movie } from props
export default function MovieCard({ movie }) {
    // TMDB image base URL
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
    
    // Fallback image if poster_path is null
    const poster = movie.poster_path 
        ? `${IMAGE_BASE_URL}${movie.poster_path}` 
        : "https://fireteller.com.au/wp-content/uploads/2020/09/Poster_Not_Available2.jpg";

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm movie-card">
                <img 
                    src={poster} 
                    className="card-img-top rounded" 
                    alt={movie.title} 
                />
                <div className="card-body p-2 text-start">
                    <h6 className="card-title text-truncate mb-3" title={movie.title}>
                        {movie.title}
                    </h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-warning text-dark">
                            ⭐ {movie.vote_average?.toFixed(1)}
                        </span>
                        <small className="text-muted">
                            {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}