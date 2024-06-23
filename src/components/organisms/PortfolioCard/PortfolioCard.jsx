import { Paper, Link, Typography } from "@mui/material"
import YellowLink from "../../atoms/YellowLink"

const PortfolioCard = ({src, url, title, urlDescription}) => {
  return (
    <Paper sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,}}>
      <img
        src={src}
        alt="Portfolio"
        style={{ width: "100%", height: "100%" }}
      />
      <Typography variant="h6" sx={{color: "white"}}>{title}</Typography>
      <YellowLink link={urlDescription} href={url} />
      {/* <Link href={url} target="_blank">{urlDescription}</Link> */}
    </Paper>

  )
}
export default PortfolioCard  
    