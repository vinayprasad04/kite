import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import {List, ListItem, ListItemText} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search'


const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      width: '100%',
      padding:'0'
    },
  },
  input:{
    padding: '15px 0 0 0',
  },
  listItem:{
    borderBottom:'1px solid #ccc',
    padding:'10px'
  }
}));

const SearchBox = props =>{
  const { className,itemsList, ...rest } = props;
  const classes = useStyles();
  return(
    <>
      <form autoComplete="off" {...rest} className={clsx(classes.root, className)}>
        <TextField
          className={classes.input}
          id="standard-basic"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search/>
              </InputAdornment>
            ),
          }}
          placeholder="Search eg: gold mcx, infy bse, nifty fut"
          fullWidth={true}
        />

        <List component="nav">
          {itemsList.map (item => (
            <ListItem
              button
              className={classes.listItem}
            ><ListItemText primary={item.Name}/> </ListItem>
          )
          )
          }
        </List>
      </form>

    </>
  )
}

export default SearchBox;
