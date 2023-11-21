import Prjcard from "../components/prjcard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const projects = [
  {
    title: "Vacationator",
    link: "https://vacationator-2de9434bd279.herokuapp.com/login",
    sshot: "/vacss.png",
    desc: "Quick example of a MVC HR application with security groups and email alerts.",
  },
  {
    title: "CafeTransmute",
    link: "https://akcodes29.github.io/CafeTransmute",
    sshot: "/ctss.png",
    desc: "Sample application showing the use of external APIs for data transformation.",
  },
  {
    title: "Github Repo",
    link: "https://github.com/shutterspeed1000",
    sshot: "/gitss.png",
    desc: "Access my other projects and sites.",
  },
  {
    title: "Soothebeast.com",
    link: "https://soothbeast.com",
    sshot: "/sbss.png",
    desc: "Personal homepage hosted on Ubuntu usiny MySQL and Wordpress",
  },
  {
    title: "Password Generator",
    link: "https://shutterspeed1000.github.io/PWD-Maker/",
    sshot: "/pwdss.png",
    desc: "Simple, open-source password generator",
  },
  {
    title: "Timed Quiz",
    link: "https://shutterspeed1000.github.io/TimedQuiz/",
    sshot: "/quizss.png",
    desc: "Simple timed quiz about Javascript",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio text-center">
      <h1>Portfolio</h1>
      <Container class="projectcards">
        <Row>
          {projects.map((project, i) => (
            <Col sm={12} md={6} lg={4} xl={2} key={i}>
              <Prjcard
                title={project.title}
                link={project.link}
                sshot={project.sshot}
                desc={project.desc}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
