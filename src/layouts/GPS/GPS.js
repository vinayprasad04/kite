import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


import CssBaseline from '@material-ui/core/CssBaseline';

import Sidebar from './components/Sidebar/Sidebar'



const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%',
    width:'100%'
  }
}));

const GPSLayout = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar/>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
}


export default GPSLayout;
