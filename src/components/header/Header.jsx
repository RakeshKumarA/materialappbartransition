import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 70,
    transition: 'all 0.5s ease-in-out',
  },
  triggeredroot: {
    height: 60,
    transition: 'all 0.5s ease-in-out',
  },
});

function ElevationScroll(props) {
  const classes = useStyles();
  const { children } = props;
  console.log(children);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'primary' : 'secondary',
    className: trigger ? classes.triggeredroot : classes.root,
  });
}

const Header = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.root}>
          <Toolbar>
            <Typography variant="h6">Scroll to Elevate App Bar</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;
