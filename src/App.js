import { Navbar, Footer } from './components';
import Home from '../src/pages/home';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const theme = createTheme({
    
      palette: {
        primary: {
          light:'#C0B7E8',
          main: '#C0B7E8',
          contrastText: '#000',
        },
        secondary: {
          light: '#302C42',
          main: '#302C42',
          contrastText: '#fff',
        }
      }
    
  })

  

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Home/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
