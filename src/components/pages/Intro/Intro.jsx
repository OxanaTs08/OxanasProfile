import { Typography, Link, Box } from "@mui/material"

const Intro = () => {
  return (
    <Box sx={{width: "80%"}}>
      <Typography variant="h5"> I am <Typography variant='customYellow'>Web Developer </Typography> based in Germany. </Typography> 
      <Typography variant="h5"> I have graduated from  <Link href="https://itcareerhub.com/"> IT Career Hub  Berlin </Link> as <Typography variant='customYellow'>React Developer </Typography>. </Typography>
      <Typography variant="h5">I am thrilled to start new job to my exceptional skills.</Typography> 
    </Box>  
    
  )
}

export default Intro
