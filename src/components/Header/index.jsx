import { Close } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Register from 'features/Auth/Components/Register';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Login from 'features/Auth/Components/Login';

const useStyles = makeStyles((theme) => ({
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose(event, reason);
          }
        }}
      >
        <IconButton sx={{ position: 'absolute', top: '0', right: '0' }} onClick={handleClose}>
          <Close />
        </IconButton>

        <DialogContent>
          {/* <Register closeDialog={handleClose} /> */}
          <Login closeDialog={handleClose} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
