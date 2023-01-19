import s from './Home.module.css';
import { Button } from '@mui/material';
import { NavLink, Outlet, useLocation } from 'react-router-dom';



export const Home = () => {
  const location = useLocation();
  return (
    <header className="homeContainer">
      <NavLink
        className={s.link}
        to={location.pathname.includes('counter') ? '/' : 'counter'}
      >
        <Button sx={{ margin: '20px' }} variant="contained">
          Counter
        </Button>
      </NavLink>
      <NavLink
        className={s.link}
        to={location.pathname.includes('search') ? '/' : 'search'}
      >
        <Button sx={{ margin: '20px' }} variant="contained">
          Search
        </Button>
      </NavLink>
      <NavLink
        className={s.link}
        to={location.pathname.includes('slider') ? '/' : 'slider'}
      >
        <Button sx={{ margin: '20px' }} variant="contained">
          Slider
        </Button>
      </NavLink>
      <hr />
      <Outlet />
    </header>
  );
};
