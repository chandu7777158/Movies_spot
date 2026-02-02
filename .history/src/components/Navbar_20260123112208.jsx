import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top py-0">
            <div className="container-fluid">
                {/* 1. Logo */}
                <a className="navbar-brand p-0" href="#">
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/022/580/623/non_2x/movie-media-letter-logo-design-illustration-free-vector.jpg" 
                        alt="Logo" 
                        className="rounded-circle nav-logo-img"
                    />
                </a>

                {/* 2. Mobile Group (Search + Hamburger) */}
                <div className="d-flex align-items-center d-lg-none ms-auto">
                    <button className="btn btn-link text-white p-2" type="button">
                        <i className="bi bi-search" style={{ fontSize: '1.4rem' }}></i>
                    </button>
                    <button className="navbar-toggler border-0 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* 3. Collapsible Section */}
                {/* Added 'text-end' so links align to the right on mobile */}
                <div className="collapse navbar-collapse text-end" id="navbarNav">
                    <ul className="navbar-nav ms-lg-3 me-auto mb-2 mb-lg-0">
                        {['Home', 'Tollywood', 'Kollywood', 'Sandalwood', 'Mollywood', 'Bollywood'].map((item) => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link nav-highlight fw-bold" href="#" style={{fontSize: '1.1rem'}}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* 4. Desktop Search Bar (Fixed to the right corner) */}
                    <form className="d-none d-lg-flex ms-auto" role="search">
                        <input 
                            className="form-control rounded-pill border-0 ps-3" 
                            type="search" 
                            placeholder="Search..." 
                            style={{width: '250px'}}
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
}
