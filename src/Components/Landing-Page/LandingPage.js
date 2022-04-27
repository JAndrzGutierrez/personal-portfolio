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
          <Image fluid src={profile} width={450} />
        </Col>
        <Col className="profile-intro">
          <h1>Hi, my name is Juan Andres!</h1>
          <h3>
            I'm a Bilingual Full-Stack Software Engineer from Costa Rica, based
            out of <strong>Richmond, VA.</strong> I'm pasioned about learning{" "}
            <strong>new technologies</strong> and all the diffents ways that can
            be apply to create cool applications.
          </h3>
        </Col>
      </Row>
      <Col className="my-projects">
        <MyProjects />
      </Col>
    </Container>
  );
};

export default LandingPage;
