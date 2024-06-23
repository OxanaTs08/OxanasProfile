import First from '../../../assets/photos/1.png'
import Second from '../../../assets/photos/2.png'
import Third from '../../../assets/photos/3.png'
import Fourth from '../../../assets/photos/4.png'
import { Grid } from '@mui/material'
import PortfolioCard from '../PortfolioCard/PortfolioCard'


const PortfolioCardList = () => {
  const cards = [{
    title: "Project 1",
    src: First,
    url: "http://google.com",
    urlDescription: "View Case >>"
  },
  {
    title: "Project 2",
    src: Second,
    url: "http://google.com",
    urlDescription: "View Case >>"

  },{
    title: "Project 3",
    src: Third,
    url: "http://google.com",
    urlDescription: "View Case >>"

  },
  {
    title: "Project 4",
    src: Fourth,
    url: "http://google.com",
    urlDescription: "View Case >>"

  }]

  return (
    <Grid container rowSpacing={9} columnSpacing={3}>
      {cards.map(({title, url, src, urlDescription}) => (
        <Grid item xs={12} sm={6} md={6}  key={title}>
          <PortfolioCard title={title} url={url} src={src} urlDescription= {urlDescription}/>
        </Grid>
))}
    </Grid>
  )
} 

export default PortfolioCardList