import { Button } from '@mui/material';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState, useEffect } from 'react';
import './Home.css';


export const Home = () => {
  const location = useLocation();
  const [mode, setMode] = useState(() => {
    return JSON.parse(window.localStorage.getItem('theme')) ?? 'light';
  });

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(mode));
  }, [mode])


  const toggleColorMode = () => {
    setMode(prevMode =>
      prevMode === 'light' ? 'dark' : 'light',
    );
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header className="homeContainer">
        <NavLink
          className="link"
          to={location.pathname.includes('counter') ? '/' : 'counter'}
        >
          <Button sx={{ margin: '20px' }} variant="contained">
            Counter
          </Button>
        </NavLink>
        <NavLink
          className="link"
          to={location.pathname.includes('search') ? '/' : 'search'}
        >
          <Button sx={{ margin: '20px' }} variant="contained">
            Search
          </Button>
        </NavLink>
        <NavLink
          className="link"
          to={location.pathname.includes('slider') ? '/' : 'slider'}
        >
          <Button sx={{ margin: '20px' }} variant="contained">
            Slider
          </Button>
        </NavLink>
        <FormControlLabel
          sx={{ marginRight: '20px', marginLeft: 'auto' }}
          control={<Switch checked={mode === 'dark'} onChange={toggleColorMode} />}
          label="Dark theme"
        />
      </header>
      <hr style={{margin: 0}} />
      <Outlet />
    </ThemeProvider>
  );
};
