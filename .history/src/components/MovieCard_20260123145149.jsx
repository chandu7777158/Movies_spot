import React from 'react';

export default function MovieCard() {
    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 gap-0 mb-4"> {/* Responsive Grid Columns */}
            <div className="card  h-100 border-0 shadow-sm movie-card">
                <img 
                    src="https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo=" 
                    className="card-img-top rounded" 
                    alt="Movie Title" 
                />
                <div className="card-body p-2 text-start">
                    <h6 className="card-title text-truncate mb-1">Movie Title Here</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-warning text-dark">⭐ 8.5</span>
                        <small className="text-muted">2024</small>
                    </div>
                </div>
            </div>
        </div>
    );
}