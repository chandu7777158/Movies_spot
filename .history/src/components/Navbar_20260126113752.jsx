import React from 'react';

export default function Navbar({ onCategorySelect }) {
    // Define categories with their corresponding language codes
    const categories = [
        { name: 'Home', code: 'trending' },
        { name: 'Tollywood', code: 'te' },
        { name: 'Bollywood', code: 'hi' },
        { name: 'Kollywood', code: 'ta' },
        { name: 'Mollywood', code: 'ml' },
        { name: 'Sandalwood', code: 'kn' }
    ];

    const handleCategoryClick = (name, code) => {
        setTitle(`${name} Movies`);
        if (code === 'trending') {
            fetchMovies('/trending/movie/day');
        } else {
            fetchMovies('/discover/movie', `&with_original_language=${code}`);
        }
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow-sm fixed-top py-1">
            <div className="container-fluid d-flex align-items-center">
                <a className="navbar-brand p-0" href="#" onClick={() => onCategorySelect('Home', 'trending')}>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/022/580/623/non_2x/movie-media-letter-logo-design-illustration-free-vector.jpg"
                        alt="Logo"
                        className="rounded-circle nav-logo-img"
                    />
                </a>

                <div className="d-flex align-items-center ms-auto">
                    <button className="btn btn-link text-white d-lg-none p-2 me-1" type="button">
                        <i className="bi bi-search fs-5"></i>
                    </button>

                    <button className="navbar-toggler border-0 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon" style={{ width: '1.2em', height: '1.2em' }}></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-2 mb-2 mb-lg-0 text-center">
                        {categories.map((cat) => (
                            <li className="nav-item" key={cat.name}>
                                <button
                                    className="nav-link btn btn-link nav-highlight px-lg-3 border-0 fw-bold"
                                    onClick={() => onCategorySelect(cat.name, cat.code)}
                                >
                                    {cat.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="me-auto"></div>

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