import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-2">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src="https://static.vecteezy.com/system/resources/previews/022/580/623/non_2x/movie-media-letter-logo-design-illustration-free-vector.jpg" alt="Logo" width="50" height="32" className="d-inline-block align-text-top me-2"/>
                </a>
                {/* Search icon for mobile, left of hamburger */}
                <span className="d-lg-none me-2">
                    <i className="bi bi-search text-white fs-4"></i>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {['Home','Tollywood','Kollywood','Sandalwood','Mollywood','Bollywood'].map((item) => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link nav-highlight" href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                    {/* Search bar for desktop/tablet */}
                    
                </div>
            </div>
        </nav>
    );
}
