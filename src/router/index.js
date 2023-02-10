import { Route, Routes } from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';
import Peaks from '../pages/Peaks';

const Nav = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Peaks />} path="/peaks" />
    </Routes>
  )
}

export default Nav
