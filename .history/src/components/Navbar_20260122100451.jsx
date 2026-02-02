import React from 'react'

export default function Navbar() {
    return (
        <div>
            

            <nav classNameName="navbar navbar-expand-lg bg-light">
                <div classNameName="container-fluid">
                    <a classNameName="navbar-brand" href="#">Navbar</a>
                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>
                    <div classNameName="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul classNameName="navbar-nav">
                            <li classNameName="nav-item">
                                <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link" href="#">Features</a>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link" href="#">Pricing</a>
                            </li>
                            <li classNameName="nav-item dropdown">
                                <a classNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul classNameName="dropdown-menu">
                                    <li><a classNameName="dropdown-item" href="#">Action</a></li>
                                    <li><a classNameName="dropdown-item" href="#">Another action</a></li>
                                    <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div classNameName="navbar bg-light container-fluid">
                    <form classNameName="d-flex" role="search">
                        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button classNameName="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>
            </nav>

        </div>
    )
}
