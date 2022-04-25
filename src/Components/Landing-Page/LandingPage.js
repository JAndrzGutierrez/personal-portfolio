import "./Landing-Page.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import crbeach from "../../images/crbeach.jpg";

const LandingPage = () => {
  return (
    <Container
      className="landing-page-container"
      style={{ backgroundImage: `url(${crbeach})`, backgroundSize:"cover" }}
    >
      <Container className="name-container">
        <h1>Hi!, I'm Juan Andres, Full-Stack Software Engineer</h1>
      </Container>
      <Button>Contact Me!</Button>
    </Container>
  );
};

export default LandingPage;
