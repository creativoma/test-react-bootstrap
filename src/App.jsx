import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/NavBar';
import Cards from './components/Cards';
import Carusel from './components/Carrousel';
import Footer from './components/Footer';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
  <>
    <Menu />
    <Cards />
    <Container>
      <Row>
        <Col><Carusel /></Col>
        <Col><Carusel /></Col>
      </Row>
    </Container>
    <Cards />
    <Cards />
    <Footer />
  </>
  )
}

export default App
