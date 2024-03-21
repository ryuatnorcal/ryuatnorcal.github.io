import { Container, Row, Col } from 'react-bootstrap'
import { LATEST_WORK } from '../../consts'
import './styles.css'
interface IntroType {
  enable: boolean
}

const Intro = ({ enable }: IntroType) => { 

  return enable ? (
    <section className='Intro'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12}>
            <div className='crest_wrapper'>
              <div className='crest'>
                <div className='inner_crest'>
                  <h1>{LATEST_WORK.name}</h1>
      						<h4>{LATEST_WORK.title}</h4>
      						<p>At</p>
      						<h3>{LATEST_WORK.company}</h3>
      						<p>Since</p>
      						<h3>{LATEST_WORK.year}</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  ) : null
}

export default Intro

