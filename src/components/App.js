import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      App Component!
    </ThemeProvider>
  );
}

export default App;
