import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, styled } from '@material-ui/styles';

import { StatsContainer } from './Containers';

const ContainerDiv = styled('div')({
  height: '100%',
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <ContainerDiv>
      <CssBaseline />
      <Container maxWidth={false} style={{ height: '100%', padding: 0 }}>
        <Typography component="div" style={{ height: '100%' }}>
          <StatsContainer />
        </Typography>
      </Container>
    </ContainerDiv>
  </ThemeProvider>
);

export default App;