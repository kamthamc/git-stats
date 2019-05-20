import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import './index.css';

import { StatsContainer } from './Containers';

const darkTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <Container maxWidth={false}>
      <CssBaseline />
      <Typography component="div">
        <StatsContainer />
      </Typography>
    </Container>
  </ThemeProvider>
);

export default App;