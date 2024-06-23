import { AppBar, Box, Typography, Link } from "@mui/material"
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <AppBar position="static" sx={{padding: "50px 180px", boxShadow: "none"}} variant=''>
      <Box sx={{display: "flex", justifyContent: "space-between", padding: 0}}>
        <Box>
          <Typography variant="h6" sx={{fontWeight: 600}}>
            <Typography variant='customYellow'> Oxana </Typography>  
            Tsyomkalo
          </Typography>
        </Box>

        <Box sx={{display: "flex", gap: 3}}>
          <ScrollLink to="aboutme" smooth={true} duration={500}>
            <Typography 
              component="span"
              sx={{ color: 'white', cursor: 'pointer', "&:hover": { color: 'grey', textDecoration: 'none' } }}
            >About Me</Typography>
          </ScrollLink>
          <ScrollLink to="work" smooth={true} duration={500}>
            <Typography 
              component="span"
              sx={{ color: 'white', cursor: 'pointer', "&:hover": { color: 'grey', textDecoration: 'none' } }}
              >Work</Typography>
          </ScrollLink>
          <ScrollLink to="contacts" smooth={true} duration={500}>
            <Typography 
              component="span"
              sx={{ color: 'white', cursor: 'pointer', "&:hover": { color: 'grey', textDecoration: 'none' } }}
              >Contacts</Typography>
          </ScrollLink>
        </Box>
      </Box>
    </AppBar>
  )
}

export default Header
