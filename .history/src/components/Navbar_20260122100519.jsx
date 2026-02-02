import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style="background-color:#121212;">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning" href="#">MyBrand</a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#mainNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="mainNav">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item"><a className="nav-link text-light" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#">Movies</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            
        </div>
    )
}
