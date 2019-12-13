import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import SearchBox from './SearchBox';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    width: '400px',
    background:'#fff',
    height:'100%',
    position:'fixed',
    border:'1px solid #f1f1f1'
  }
}));

const Sidebar = props =>{
  const itemsList =[
    {
      Name:'DHFL'
    },
    {
      Name:'HDFC BANK'
    },
    {
      Name:'HDFC'
    }
  ]
  const { className, ...rest } = props;
  const classes = useStyles();
  return(
    <div {...rest} className={clsx(classes.root, className)}>
      <SearchBox itemsList={itemsList}/>
    </div>
  )
}

export default Sidebar;
