import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import './styles.css'
import '../../libs/font-mfizz-2.4.1/font-mfizz.css'
import { ICONS } from '../../consts'

const renderIcons = () => { 
  return ICONS.map((icon, index) => { 
    return (
      <Col className="icons" key={`${icon.tag}-${index}`}>
        <i className={icon.tag} id={icon.tag} />
        <p>{ icon.name }</p>
      </Col>
    )
  })
}

interface TechType {
  enable: boolean
}

const Tech = ({ enable }: TechType) => {
  return enable ? (
    <section className="Tech">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="auto" className="header">
            <i className="icon-shell" aria-hidden="true"></i>
          	<h2>Favorite Technologies</h2>
          </Col>
        </Row>
      </Container>
      <Container className="justify-content-center">
        <Row>
          {renderIcons()}
        </Row>
      </Container>
    </section>
  ) : null
}

export default Tech