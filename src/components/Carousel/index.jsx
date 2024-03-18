import {useState} from 'react'
import {
  Carousel as RBCarousel,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'


const Carousel = ({ carouselData }) => { 

  const [activeIndex, setActiveIndex] = useState(0)
  const handleSelect = (selectedIndex) => { 
    setActiveIndex(selectedIndex)
  }

  const getBioItem = (item, index) => (
      <RBCarousel.Item key={ `item-${index}`} > 
        <Container>
          <Row>
            <Col xs="12" className='contentContainer'>
              <h3>{ item.header }</h3>
              {
                item.location && item.year && (
                  <p>{`${item.location} ${item.year}`}</p>
                )
              }
              {
                item.content && (
                  <p>{ item.content }</p>
                )  
              }
            </Col>
          </Row>
        </Container>
      </RBCarousel.Item>
  )

  const getCarouselItems = (carouselData) => {
    return carouselData.map((data, index) => getBioItem(data, index))
   }

  return (
    <RBCarousel
      slide={ true }
      activeIndex={activeIndex}
      onSelect={handleSelect}
      variant="dark"
    >
      { getCarouselItems(carouselData) }
    </RBCarousel>
  )
}

export default Carousel