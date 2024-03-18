import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { LINKEDIN_LINK, EMAIL } from '../../consts'

const Footer = ({ enable }) => { 
  return enable ? (
    <section className="Footer">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="auto" lg="4">
            <a href={EMAIL} ><FontAwesomeIcon icon={faEnvelope } /></a>
            <a href={LINKEDIN_LINK} target="_blank"><FontAwesomeIcon icon={ faLinkedinIn } /></a>
          </Col>
          <Col lg="4">
      
          </Col>
          <Col xs="auto" lg="4">
            <p>&copy; Ryutaro Matsuda. All Right Recieved. </p>
          </Col>
        </Row>
      </Container>
    </section>
  ) : null
}

export default Footer