import "./Landing-Page.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import crbeach from "../../images/crbeach.jpg";
import memoji from "../../images/memoji.png";

const LandingPage = () => {
  return (
    <Container
      className="landing-page-container"
      style={{ backgroundImage: `url(${crbeach})`, backgroundSize: "cover" }}
    >
        <Container className="my-memoji"><img src={memoji}/></Container>
      <Container className="name-container">
        <h1 className="landing-page-text">
          Hi!, I'm Juan Andres, Full-Stack Software Engineer
        </h1>
      </Container>
      <Button>Contact Me!</Button>
    </Container>
  );
};

export default LandingPage;
