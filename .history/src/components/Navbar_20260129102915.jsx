import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Tollywood', path: '/tollywood' },
        { label: 'Sandalwood', path: '/sandalwood' },
        { label: 'Mollywood', path: '/mollywood' },
        { label: 'Kollywood', path: '/kollywood' },
        { label: 'Bollywood', path: '/bollywood' },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm(""); // Clear input after search
            // Close mobile menu if open
            const menu = document.getElementById('navbarNav');
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top py-1">
            <div className="container-fluid d-flex align-items-center">
                <Link className="navbar-brand p-0" to="/">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/022/580/623/non_2x/movie-media-letter-logo-design-illustration-free-vector.jpg"
                        alt="Logo"
                        className="rounded-circle nav-logo-img"
                    />
                </Link>
                    {/* Mobile Search Icon - Now triggers the toggle to show the search bar */}

                <div className="d-flex align-items-center ms-auto">
                    <button 
                        className="btn btn-link text-white d-lg-none p-2 me-1" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav"
                    >
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

                    {/* Unified Search Form (Visible in collapse on mobile, inline on desktop) */}
                    {/*you aren't "calling" the function,When the event browser runs that function, it automatically injects an "Event Object" as the first argument */}
                    {/*This object contains all the info about the click/submit (like which key was pressed)*/}
                    <form className="d-flex mt-2 mt-lg-0" onSubmit={handleSearch}>
                        <input 
                            className="form-control rounded-pill border-0 ps-3" 
                            type="search" 
                            placeholder="Search Movies..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
}