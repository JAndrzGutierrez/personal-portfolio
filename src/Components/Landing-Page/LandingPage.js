import "./Landing-Page.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import profile from "../../images/profile.png";
const LandingPage = () => {
  return (
    <Container>
      <Row>
        <Col lg={true}>
        <Image fluid src={profile} />
        </Col>
        <Col>Introduction goes here</Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
