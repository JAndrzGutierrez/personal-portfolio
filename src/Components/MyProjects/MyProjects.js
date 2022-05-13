import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Portfolio from "../../images/Portfolio.png";
import weatherapp from "../../images/weatherapp.png";
import planningapp from "../../images/planningapp.png";
import communitygarden from "../../images/communitygarden.png";

const MyProjects = () => {
  return (
    <Container fluid>
      <Row>
        <Col><h3>My Projects</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={true}>
          <h5>My First Portfolio Site!</h5>
          <a href="https://jandrzgutierrez.github.io/">
            <Image fluid src={Portfolio} />
          </a>
          <p>
            This was my fisrt project ever, I developed it using plain HTML, CSS
            and JavaScript.
          </p>
        </Col>
        <Col lg={true}>
          <h5>Boruca Weather App</h5>

          <a href="https://jandrzgutierrez.github.io/Projecto2/#/homepage">
            <Image fluid src={weatherapp} height={450} />
          </a>
          <p>
            This app will provide you accurate information about the weather in
            your current location using a 3rd party API. It coded using React
            and JavaScript.
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={true}>
          <h5>Project Planning App: GoalGetter</h5>
         
          <a href="https://thepumalovers.github.io/project-planning-client/">
            <Image fluid src={planningapp} />
          </a>
          <p>
            This App was created by 4 talented Software Engineers, I was one of
            them. The purpose of the app was to help you to get tasks/projects
            done and keep track of them.
          </p>
        </Col>
        <Col lg={true}>
          <h5>Community Garden App</h5>
         
          <a href="https://jandrzgutierrez.github.io/home">
            <Image fluid src={communitygarden} />
          </a>
          <p>
            This is my first full stack app that I developed fully independent.
            A community Garden is on the need of a website so I volunteer to
            create one for them. Frontend was coded using react and bootstrap,
            for the Backend I used Python and Django with user auth. Still a
            work in progress.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProjects;
