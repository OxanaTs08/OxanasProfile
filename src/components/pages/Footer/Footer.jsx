import { Box, Link} from "@mui/material"
import YellowLink from "../../atoms/YellowLink"
import SectionTitle from "../../atoms/SectionTitle"

const Footer = () => {
  return (
    <>
    <SectionTitle  title={"Contacts"}/>
      <Box id="contacts" position="static" sx={{display: "flex", justifyContent: "space-between"}} variant=''>
        <Box>
          <YellowLink link={"Write me Email"} />
        </Box>

        <Box sx={{display: "flex", gap: 3}}>
          <Link href="#">Linkedin</Link>
        </Box>
      </Box>
    </>
  )
}

export default Footer
