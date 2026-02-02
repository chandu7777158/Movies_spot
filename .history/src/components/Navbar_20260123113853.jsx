export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top py-1">
      <div className="container-fluid d-flex align-items-center">
        {/* Brand */}
        <a className="navbar-brand p-0" href="#">
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/580/623/non_2x/movie-media-letter-logo-design-illustration-free-vector.jpg"
            alt="Logo"
            className="rounded-circle nav-logo-img"
          />
        </a>

        {/* Right side: mobile search icon + offcanvas toggler */}
        <div className="d-flex align-items-center ms-auto">
          <button className="btn btn-link text-white d-lg-none p-2 me-1" type="button">
            <i className="bi bi-search fs-5"></i>
          </button>

          {/* Offcanvas toggler */}
          <button
            className="navbar-toggler border-0 p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" style={{ width: "1.2em", height: "1.2em" }}></span>
          </button>
        </div>

        {/* Offcanvas menu for < lg */}
        <div
          className="offcanvas offcanvas-end bg-primary text-white"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Movies Spot</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mb-3">
              {['Home', 'Tollywood', 'Kollywood', 'Sandalwood', 'Mollywood', 'Bollywood'].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link nav-highlight px-lg-3" href="#">{item}</a>
                </li>
              ))}
            </ul>

            

            {/* Desktop search (mirrors right side) */}
            <form className="d-none d-lg-flex ms-lg-auto" role="search">
              <input
                className="form-control rounded-pill border-0 ps-3"
                type="search"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
