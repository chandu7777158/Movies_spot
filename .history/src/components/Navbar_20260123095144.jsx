export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow-sm py-2">
      <div className="container-fluid">

        {/* Brand + mobile search + toggler in one row */}
        <div className="d-flex align-items-center w-100">
          {/* Brand */}
          <a className="navbar-brand d-flex align-items-center me-2" href="#">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/580/623/non_2x/movie-media-letter-logo-design-illustration-free-vector.jpg"
              alt="Logo"
              width="40"
              height="28"
              className="d-inline-block align-text-top me-2"
            />
            <span className="fw-semibold">Movies Spot</span>
          </a>

          {/* Mobile search (icon + dropdown input) */}
          <div className="d-md-none ms-auto me-2 flex-grow-1" style={{ maxWidth: "180px" }}>
            <div className="input-group input-group-sm rounded-search">
              <span className="input-group-text bg-white border-0">
                <i className="bi bi-search text-secondary"></i>
              </span>
              <input
                className="form-control border-0 bg-white text-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>

          {/* Toggler */}
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Collapsible nav + desktop search */}
        <div className="collapse navbar-collapse mt-2 mt-md-0" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {["Home","Tollywood","Kollywood","Sandalwood","Mollywood","Bollywood"].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link nav-highlight" href="#">{item}</a>
              </li>
            ))}
          </ul>

          {/* Search bar for >= md */}
          <form className="d-none d-md-flex" role="search" style={{ alignItems: "center" }}>
            <div className="input-group rounded-search">
              <span className="input-group-text bg-white border-0">
                <i className="bi bi-search text-secondary"></i>
              </span>
              <input
                className="form-control border-0 bg-white text-dark"
                type="search"
                placeholder="Search movies..."
                aria-label="Search"
              />
            </div>
          </form>
        </div>

      </div>
    </nav>
  );
}
