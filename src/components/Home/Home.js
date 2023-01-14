import s from './Home.module.css';
import { Button } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <header className="homeContainer">
      <NavLink className={s.link} to="counter">
        <Button sx={{ margin: '20px' }} variant="contained">
          Counter
        </Button>
      </NavLink>
      <NavLink className={s.link} to="search">
        <Button sx={{ margin: '20px' }} variant="contained">
          Search
        </Button>
      </NavLink>
      <NavLink className={s.link} to="/">
        <Button sx={{ margin: '20px' }} variant="contained">
          Back
        </Button>
      </NavLink>
      <hr />
      <Outlet />
    </header>
  );
};
