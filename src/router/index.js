import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';
import Peaks from '../pages/Peaks';

const Nav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Peaks />} path="/peaks" />
      </Routes>
    </BrowserRouter>
  )
}

export default Nav
