import './assets/styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Nav from './router';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="d-flex flex-nowrap">
        <div className="container pt-5">
          <h1>React Essential Training</h1>
          <Nav />
        </div>
      </main>
    </BrowserRouter>
  )
}
