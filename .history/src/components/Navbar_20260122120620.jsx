
import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-2">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src="https://static.vecteezy.com/system/resources/previews/022/580/623/non_2x/movie-media-letter-logo-design-illustration-free-vector.jpg" alt="Logo" width="32" height="32" className="d-inline-block align-text-top me-2"/>
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
                    <form className="d-none d-lg-flex" role="search" style={{alignItems:'center'}}>
                        <div className="input-group rounded-search">
                            <span className="input-group-text bg-white border-0" id="search-addon">
                                <i className="bi bi-search text-primary"></i>
                            </span>
                            <input className="form-control border-0 bg-white text-dark" type="search" placeholder="Search" aria-label="Search" style={{borderRadius:'30px'}} />
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
}
