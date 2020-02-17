import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{ cursor: "pointer" }}>
            <a href="/question1" style={{color: '#ffff', textDecoration: 'none'}}>Q1</a>
          </Typography>
          <Typography variant="h6" className={classes.title} style={{cursor:"pointer"}}>
            <a href="/question2" style={{color: '#ffff', textDecoration: 'none'}}>Q2</a>
          </Typography>
          <Typography variant="h6" className={classes.title} style={{cursor:"pointer"}}>
            <a href="/question3" style={{color: '#ffff', textDecoration: 'none'}}>Q3</a>
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
