import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { Topbar, Sidebar } from './components';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: '100%',
    background:'#fff'
  },
  content: {
    height: '100%',
    paddingLeft:'400px',
  }
}));

const Kite = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <Container maxWidth="lg">
        <Sidebar/>
        <main className={classes.content}>
          {children}
        </main>
      </Container>
    </div>
  );
};

Kite.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Kite;
