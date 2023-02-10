import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>React Essential Training</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/peaks">Peaks</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
