import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top py-1">
            <div className="container-fluid d-flex align-items-center">
                {/* 1. Brand Logo - Larger & Rounded */}
                <a className="navbar-brand p-0 m-0 d-flex align-items-center" href="#">
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/022/580/623/non_2x/movie-media-letter-logo-design-illustration-free-vector.jpg" 
                        alt="Logo" 
                        className="rounded-circle nav-logo-img"
                        width="32"
                        height="32"
                    />
                    <span className="ms-2 fw-bold d-none d-sm-inline">Movies_Spot</span>
                </a>

                {/* 2. Mobile Search Icon (Placed Second Left) */}
                <div className="d-flex align-items-center ms-auto">
                    <button className="btn btn-link text-white d-lg-none p-2 me-1" type="button">
                        <i className="bi bi-search fs-5"></i>
                    </button>

                    {/* 3. The Hamburger Menu Button */}
                    <button className="navbar-toggler border-0 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon" style={{ width: '1.2em', height: '1.2em' }}></span>
                    </button>
                </div>

                {/* 4. Collapsible Links & Desktop Search */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                        {['Home', 'Tollywood', 'Kollywood', 'Sandalwood', 'Mollywood', 'Bollywood'].map((item) => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link nav-highlight px-lg-3" href="#">{item}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop-only Search Bar */}
                    <form className="d-none d-lg-flex" role="search">
                        <input 
                            className="form-control rounded-pill border-0 ps-3" 
                            type="search" 
                            placeholder="Search..." 
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
}