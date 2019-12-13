import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {makeStyles } from '@material-ui/styles';
import { Button, List, ListItem } from '@material-ui/core';
import clsx from 'clsx';
import { NavLink as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    float: 'right',
    width:'100%',
    textAlign:'right'
  },
  button:{
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: 'normal'
  },
  item:{
    display: 'inline-block',
    width: 'auto'
  },
  active:{
    color:'red'
  }
}));

const CustomRouterLink = forwardRef((props) => (
  <RouterLink {...props} />
));

const TopbarNav = props => {
  const { className, pages, ...rest } = props;
  const classes = useStyles();
  return (
    <List {...rest}  className={clsx(classes.root, className)}>
      {pages.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button activeClassName={classes.active} className={classes.button} component={CustomRouterLink} to={page.href}>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

TopbarNav.propTypes = {
  className: PropTypes.string
};

export default TopbarNav;
