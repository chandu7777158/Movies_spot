
import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2">
            <div className="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                        Bootstrap
                </a>
                <a className="navbar-brand fw-bold text-warning" href="#" style={{ letterSpacing: '2px' }}>MoviesSpot</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tollywood</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kollywood</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sandalwood</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mollywood</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bollywood</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 bg-dark text-light border-warning" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
