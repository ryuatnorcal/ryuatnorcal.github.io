import { Container, Row, Col } from 'react-bootstrap'
import Carousel from '../../components/Carousel'
import { LATEST_WORK, SET_OF_BIO } from '../../consts'
import './styles.css'
import me from './imgs/me.jpg'
interface BioType { 
  enable: boolean
}

const Bio = ({ enable }: BioType) => { 

  return enable ? (
    <section className="Bio">
      <Container className="bioContainer">
        <Row>
          <Col xs="12" lg="6" className="leftPane">
            <img className="profile" src={me.src} />
            <h2>{LATEST_WORK.name}</h2>
            <p>{LATEST_WORK.title}</p>
            <p>{LATEST_WORK.company}</p>
          </Col>
          <Col xs="12" lg="6" className="rightPane">
            <Carousel
              carouselData={SET_OF_BIO}
              type='bio'
            />
          </Col>
        </Row>
      </Container>
    </section>
  ) : null
}

export default Bio