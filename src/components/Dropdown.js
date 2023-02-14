import { Link } from 'react-router-dom';

function Dropdown({ type }) {
  return (
    <ul
      className={
        type === 'navbar'
          ? 'navbar-nav me-auto mb-2 mb-lg-0'
          : 'dropdown-menu dropdown-menu-dark'
      }
    >
      <li className={type === 'navbar' ? ' nav-item' : 'dropdown-item'}>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li className={type === 'navbar' ? ' nav-item' : 'dropdown-item'}>
        <Link to="/peaks" className="nav-link">
          Peaks
        </Link>
      </li>
      <li className={type === 'navbar' ? ' nav-item' : 'dropdown-item'}>
        <Link to="/reducer" className="nav-link">
          Reducer
        </Link>
      </li>
      <li className={type === 'navbar' ? ' nav-item' : 'dropdown-item'}>
        <Link to="/destructuring" className="nav-link">
          Destructuring
        </Link>
      </li>
    </ul>
  )
}

export default Dropdown
