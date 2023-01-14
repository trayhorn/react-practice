import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import Counter from './components/Counter/Counter';
import Search from './components/Search/Search';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/react-hw-05-films" element={<Home />}>
          <Route path="counter" element={<Counter />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
