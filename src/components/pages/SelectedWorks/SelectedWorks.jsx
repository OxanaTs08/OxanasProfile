import SectionTitle from "../../atoms/SectionTitle";
import PortfolioCardList from "../../organisms/PortfolioCardList/PortfolioCardList";
import { Box } from "@mui/material";

const SelectedWorks = () => {
  return (
    <Box id="work">
      <SectionTitle title={"Selected Works"} />
      <PortfolioCardList />
    </Box>
  )
}

export default SelectedWorks