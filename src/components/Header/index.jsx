import CodeIcon from '@mui/icons-material/Code';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/system';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={classes.link} to="/">
              King Shop
            </Link>
          </Typography>

          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>

          <NavLink className={classes.link} to="/albums">
            <Button color="inherit">Albums</Button>
          </NavLink>

          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
