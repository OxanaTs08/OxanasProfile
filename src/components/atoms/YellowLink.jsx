import {Link} from "@mui/material"

const YellowLink = ({link, href}) => {
  return (
    
    <Link sx={{
      color: '#FEC45D',
      "&:hover": {
        color: '#F3CC02',
        textDecoration: 'none',
      }
    }} href={href}>
      {link}
    </Link>
  )
}

export default YellowLink