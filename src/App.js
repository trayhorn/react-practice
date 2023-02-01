import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import Counter from './components/Counter/Counter';
import Search from './components/Search/Search';
import Slider from 'components/Slider/Slider';
import Scroll from 'components/exampleScroll';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="counter" element={<Counter />} />
        <Route path="search" element={<Search />} />
        <Route path='slider' element={<Slider />} />
        <Route path='scroll' element={<Scroll />} />
      </Route>
    </Routes>
  );
};



export default App;
