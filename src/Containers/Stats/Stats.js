import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import GridList from '@material-ui/core/GridList';
import PublicIcon from '@material-ui/icons/Public';
import LockSharpIcon from '@material-ui/icons/LockSharp';
import GridListTile from '@material-ui/core/GridListTile';
import Tooltip from '@material-ui/core/Tooltip';

import Typography from '@material-ui/core/Typography';
import StatsChart from "./StatsChart";
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles(theme => ({
  chart: {
    padding: theme.spacing(3, 2),
    width: '100%'
  },
  chartHeader: {
    padding: theme.spacing(3, 2),
  },
  repos: {
    padding: theme.spacing(2, 3, 1),
    margin: theme.spacing(3, 0, 0, 0),
    width: '100%'
  },
  reposHeader: {
    padding: theme.spacing(2, 0, 1),
  },
  repo: {

  },
  repoCard: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  unmanaged: {
    color: red[500],
  },
  managed: {
    color: green[500],
  }
}));


export default function Stats(props) {
  const classes = useStyles();
  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Git Stats
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper className={classes.chart}>
        <Typography variant="h6" color="inherit" className={classes.chartHeader}>
          Git Repository Cloned summary in last 30 days.
        </Typography>
        <StatsChart stats={props.groupedRepositorySummary}/>
      </Paper>
      <Paper className={classes.repos}>
        <Typography variant="h6" color="inherit" className={classes.reposHeader}>
          Repositories
        </Typography>
        <Tabs
          value={props.selectedRepoType}
          onChange={(evt, selectedRepoType) => props.switchRepoType({ selectedRepoType })}
        >
          <Tab label="all" value="all" />
          <Tab label="private" value="private" icon={<LockSharpIcon />} wrapped />
          <Tab label="public" value="public" icon={<PublicIcon />} wrapped />
        </Tabs>
        <GridList cellHeight={150} cols={3}>
          {
            props.repositories.map(repo => (
              <GridListTile key={repo.repoId} className={classes.repo}>
                <Box className={classes.repoCard} boxShadow={2}>
                  <Box display="flex">
                    <Box mr={1} display="flex" mt={0.5}>
                      <Tooltip title={repo.isPublic? 'Public Repo': 'Private Repo'}>
                        {
                          repo.isPublic ? <PublicIcon /> : <LockSharpIcon />
                        }
                      </Tooltip>
                    </Box>
                    <Box>
                      <Typography variant="h5" color="inherit" component="div">
                        {repo.name}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography color="inherit" component="div">
                    Cloned in
                    <Typography className={classes.managed} component="span">
                      {` ${repo.managedDevices} `}
                    </Typography>
                    managed devices and
                    <Typography className={classes.unmanaged} component="span">
                      {` ${repo.unmanagedDevices} `}
                    </Typography>
                    unmanaged devices
                  </Typography>
                </Box>
              </GridListTile>
            ))
          }
        </GridList>
      </Paper>
    </Grid>
  );
}