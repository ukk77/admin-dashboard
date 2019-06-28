/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import ProfileTabs from './side'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar:{
    backgroundColor:'black',
  }
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root} >
    <AppBar position="static" className={classes.appBar} >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Recon" />
        </Tabs>
      </AppBar>
      <Divider/>
      {value === 0 && <TabContainer><ProfileTabs/></TabContainer>}
    </div>
  );
}

export default SimpleTabs;