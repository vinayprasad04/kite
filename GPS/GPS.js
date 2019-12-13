import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { UsersTable } from '../UserList/components';
import mockData from '../UserList/data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const GPSDashboard = () => {
  const classes = useStyles();
  const [users] = useState(mockData);
  return (
    <div className={classes.root}>
      <UsersTable users={users} />
    </div>
  );
};

export default GPSDashboard;
