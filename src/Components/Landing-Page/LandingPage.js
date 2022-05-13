import "./Landing-Page.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import profile from "../../images/profile.png";
import MyProjects from "../../Components/MyProjects/MyProjects.js";
const LandingPage = () => {
  return (
    <Container>
      <Row>
        <Col className="profile-picture" lg={true}>
          <Image fluid={true} src={profile} width={350}/>
        </Col>
        <Col className="profile-intro">
          <h1>Juan Andres Gutierrez</h1>
          <p>
          “Evolving the digital future with superior software development and programming.”
          </p>
        </Col>
      </Row>
      <Col className="my-projects">
        <MyProjects />
      </Col>
    </Container>
  );
};

export default LandingPage;
