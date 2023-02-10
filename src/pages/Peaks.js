import { Link } from 'react-router-dom';

const tahoe_peaks = [
  { name: 'Freel', elevation: '10891' },
  { name: 'Monument', elevation: '10067' },
  { name: 'Pyramid', elevation: '9983' },
  { name: 'Tallac', elevation: '9735' }
]

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <>
      <h2>Peaks</h2>
      <List
        data={tahoe_peaks}
        renderEmpty={<p>This list is empty</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.elevation} ft.
          </>
        )}
      />
      <Link to="/" className="btn btn-primary">
        retornar a página inicial
      </Link>
    </>
  )
}

export default App
