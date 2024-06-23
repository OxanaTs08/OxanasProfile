import Header from './components/pages/Header/Header.jsx'
import Intro from './components/pages/Intro/Intro.jsx'
import SelectedWorks from './components/pages/SelectedWorks/SelectedWorks.jsx'
import { createTheme, ThemeProvider, Box } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import AboutMe from './components/pages/AboutMe/AboutMe.jsx'
import Footer from './components/pages/Footer/Footer.jsx'



const theme = createTheme({
  palette: {
    primary: {
      main: '#171717',
    },
  },
    typography : {
     customYellow: {
      color: '#FEC45D',
    },
    sectionTitle: {
      // width: "100%",
      maxHeight: "max-content",
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 3,
    },
  } ,
  components:{
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.5)',
          "&:hover": {
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
          }
        },
        // customLinkYellow: {
        //   color: '#FEC45D',
        //   "&:hover": {
        //     color: '#FEC45D',
        //     textDecoration: 'none',
        //   }
        // },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
        backgroundColor: "#171717",
        }
      }
    }
    }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Box sx={{padding: "70px 180px", display: "flex", flexDirection: "column", gap: 2}}>
          <Intro />
          <SelectedWorks />
          <AboutMe />
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
