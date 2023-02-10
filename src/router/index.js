import { Route, Routes } from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';
import Peaks from '../pages/Peaks';
import Reducer from '../pages/Reducer';

const Nav = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Peaks />} path="/peaks" />
      <Route element={<Reducer />} path="/reducer" />
    </Routes>
  )
}

export default Nav
