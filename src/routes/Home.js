import '../style/Style.css';
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';
import DocumentCard from '.././components/DocumentCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <div className="bg-main">
      <NavBar />
      <Container className="upload-box">
        <div className="upload-button">
          <input type="file" />
        </div>
      </Container>
      <Container className="cards-container">
        <Row>
          <Col sm={6} md={3} lg={2}>
            <DocumentCard />
          </Col>
          <Col sm={6} md={3} lg={2}>
            <DocumentCard />
          </Col>
          <Col sm={6} md={3} lg={2}>
            <DocumentCard />
          </Col>
          <Col sm={6} md={3} lg={2}>
            <DocumentCard />
          </Col>
          <Col sm={6} md={3} lg={2}>
            <DocumentCard />
          </Col>
          <Col sm={6} md={3} lg={2}>
            <DocumentCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
