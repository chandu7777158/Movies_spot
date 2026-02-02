import React from 'react';

export default function MovieCard() {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-12 col-sm-6 col-md-3 col-lg-2  mb-4"> {/* Responsive Grid Columns */}
                    <div className="card h-100 border-0 shadow-sm movie-card">
                        <img
                            src="https://media.istockphoto.com/id/1237804526/vector/movie-night-concept-with-popcorn-cinema-tickets-drink-tape-in-cartoon-style-movie-or-cinema.jpg?s=612x612&w=0&k=20&c=FWIp6SXBqUg-_PWtoTxOy00b2aeg5xNDiRcFr6IF4l4="
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
            </div>
        </div>
    );
}