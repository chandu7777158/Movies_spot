import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Movies</a>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="navbar-brand">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="navbar-brand">
                                <a class="nav-link" href="#">Tollywood</a>
                            </li>
                            <li class="navbar-brand">
                                <a class="nav-link" href="#">Bollywood</a>
                            </li>
                            <li class="navbar-brand">
                                <a class="nav-link" href="#">Sandlewood</a>
                            </li>
                            <li class="navbar-brand ">
                                <a class="nav-link " href="#">Mollywood</a>
                            </li>
                            <li class="navbar-brand ">
                                <a class="nav-link " href="#">Bollywood</a>
                            </li>
                            
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
