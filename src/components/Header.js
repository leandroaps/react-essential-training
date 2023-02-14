import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

function Header() {
  return (
    <header
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Ninth navbar example"
    >
      <div className="container">
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
          <Dropdown type={'navbar'} />
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <Dropdown />
        </div>
      </div>
    </header>
  )
}

export default Header
