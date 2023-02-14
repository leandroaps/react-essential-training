import { Route, Routes } from 'react-router-dom';

import About from '../pages/About';
import Destructuring from '../pages/Destructuring';
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
      <Route
        element={<Destructuring library={'Hello World'} />}
        path="/destructuring"
      />
    </Routes>
  )
}

export default Nav
