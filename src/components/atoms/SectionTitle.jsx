import { Typography, Box, Divider } from "@mui/material"

const SectionTitle = ({title}) => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", gap: "10px", paddingBottom: "20px", paddingTop: "20px",}}>
    <Typography variant="sectionTitle">
      {title}
    </Typography>
    <Divider sx={{color: "#FEC45D", height: "2px", borderColor: "#FEC45D"}}/>
    </Box>
  )
}

export default SectionTitle