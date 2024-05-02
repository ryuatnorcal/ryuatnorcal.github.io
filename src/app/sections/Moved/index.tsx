import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles.css'

const Moved = () => {
  return (
    <section className="moved">
      <Container>
        <Row className="justify-content-center">
          <Col className="wrapper">
            <div>
              <h3>Sorry...</h3>
              <p>I moved to Digital Ocean</p>
                <a href='https://clownfish-app-2u2dr.ondigitalocean.app/' className="btn btn-dark">Take Me There!</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Moved