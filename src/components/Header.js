import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Ninth navbar example"
    >
      <div className="container-xl">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="navbar-collapse collapse" id="navbarsExample07XL">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/peaks" className="nav-link">
                Peaks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reducer" className="nav-link">
                Reducer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/destructuring" className="nav-link">
                Destructuring
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
