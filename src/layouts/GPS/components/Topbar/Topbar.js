import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import TopbarNav from './TopbarNav';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    borderBottom:'1px solid #f1f1f1'
  },
  alignRight:{
    float: 'right',
    width:'100%',
    textAlign:'right'
  },
  buttonStyle:{
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: 'normal'
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const pages = [
    {
      title: 'KiteDashboard',
      href: '/kite-dashboard'
    },
    {
      title: 'Orders',
      href: '/Orders'
    },
    {
      title: 'Holdings',
      href: '/Holdings'
    },
    {
      title: 'Positions',
      href: '/Positions'
    },
    {
      title: 'Funds',
      href: '/Funds'
    }
  ];
  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="inherit" position="fixed">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" className={classes.title}><RouterLink to="/kite-dashboard">Kite</RouterLink> </Typography>
          <TopbarNav pages={pages}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
