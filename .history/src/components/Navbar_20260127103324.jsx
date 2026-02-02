import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Tollywood', path: '/tollywood' },
        
        { label: 'Kollywood', path: '/kollywood' },
        { label: 'Mollywood', path: '/mollywood' },
        { label: 'Sandalwood', path: '/sandalwood' },
        { label: 'Bollywood', path: '/bollywood' },
    ];

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow-sm fixed-top py-1">
            <div className="container-fluid d-flex align-items-center">
                <Link className="navbar-brand p-0" to="/">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/022/580/623/non_2x/movie-media-letter-logo-design-illustration-free-vector.jpg"
                        alt="Logo"
                        className="rounded-circle nav-logo-img"
                    />
                </Link>
                {/* Reposible for mobile toggle bar*/}
                <div className="d-flex align-items-center ms-auto">
                    <button className="btn btn-link text-white d-lg-none p-2 me-1">
                        <i className="bi bi-search fs-5"></i>
                    </button>
                    <button className="navbar-toggler border-0 p-2" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-2 mb-2 mb-lg-0 text-center">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.label}>
                                <Link className="nav-link nav-highlight px-lg-3 fw-bold" to={item.path}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="me-auto"></div>
                    <form className="d-none d-lg-flex" role="search">
                        <input className="form-control rounded-pill border-0 ps-3" type="search" placeholder="Search..." />
                    </form>
                </div>
            </div>
        </nav>
    );
}