import { Link } from 'react-router-dom';

function HomeButton() {
  return (
    <Link to="/" className="btn btn-primary">
      retornar a página inicial
    </Link>
  )
}

export default HomeButton
