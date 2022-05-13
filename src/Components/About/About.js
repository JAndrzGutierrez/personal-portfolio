import Container from "react-bootstrap/Container";
import SkillBar from "react-skillbars";
const AboutSection = () => {
  const skills = [
    { type: "Bash", level: 85 },
    { type: "React", level: 75 },
    { type: "Javascript", level: 75 },
    { type: "HTML/CSS", level: 85 },
    { type: "Python", level: 80 },
    { type: "Django", level: 65 },
    { type: "Postgres", level: 65 },
    { type: "SQL", level: 75 },
  ];
  const colors = {
    bar: "#519e8aff",
    title: {
      text: "#519e8aff",
      background: "#020202ff",
    },
  };

  return (
    <Container>
      <h2>About Section</h2>

      <h3>Hi, I'm Juan Andres!</h3>
      <p>
        As an adept Full-Stack Software Engineer, I am well-rounded in software
        development with honed talents in software engineering and software
        testing. In addition, I have specific experience with the following
        languages, frameworks and databases: React, javaScript, Python,
        HTML/CSS, API’s, CRUD, Postgres, Django, Heroku, Git and more. I am also
        a very fast learner and flourish in a team environment. My previous
        roles have strengthened my capabilities in problem-solving, scientific
        thinking and motivation, including a keen attention to detail and
        accuracy.
      </p>
      <Container>
        <SkillBar
          skills={skills}
          colors={colors}
          offset={`25px`}
          animationDuration={6500}
        />
      </Container>
    </Container>
  );
};
export default AboutSection;
