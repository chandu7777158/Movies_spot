import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow-sm fixed-top">
            <div className="container-fluid">
                {/* Brand Logo */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/022/580/623/non_2x/movie-media-letter-logo-design-illustration-free-vector.jpg" 
                        alt="Logo" 
                        width="40" 
                        height="30" 
                    />
                </a>

                {/* Mobile Toggle Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {['Home', 'Tollywood', 'Kollywood', 'Sandalwood', 'Mollywood', 'Bollywood'].map((item) => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link nav-highlight px-3" href="#">{item}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Responsive Search Bar */}
                    <form className="d-flex mt-3 mt-lg-0" role="search">
                        <div className="input-group">
                            <input 
                                className="form-control rounded-pill border-0 ps-3" 
                                type="search" 
                                placeholder="Search movies..." 
                                aria-label="Search" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
}