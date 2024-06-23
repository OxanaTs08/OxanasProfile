import { Typography, Link, Box } from "@mui/material"
import YellowLink from "../../atoms/YellowLink"
import SectionTitle from "../../atoms/SectionTitle"

const AboutMe = () => {
  return (
    <Box id="aboutme" sx={{width: "80%", display: "flex", flexDirection: "column", gap: 1}}>
      <SectionTitle  title={"About Me"}/>
      <Typography variant="h6" sx={{lineHeight: 1.5}}>During my tenure as a Customer Care Specialist, 
        my work frequently intersected with that of IT specialists. 
        I was responsible for redirecting customer issues to the IT team, 
        providing feedback to customers after receiving responses from the development team, 
        and occasionally writing technical specifications when customers requested service improvements.
         As a result, my interest in the IT field grew. 
         This interest prompted me to pursue IT training in January 2022, 
         which I had to interrupt due to the war. I was able to return to my dream in 2024 
         and am currently undergoing training at ITCareeHub in Berlin, Germany.
        </Typography>
        <YellowLink link={"View My Resume"} href={"#"} />
    </Box>  
    
  )
}

export default AboutMe
