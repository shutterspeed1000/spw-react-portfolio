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
    <div className="portfolio">
      <h1>Portfolio</h1>
      <Container>
        <Row>
          <Col sm={4}>
            <Prjcard
              title={projects[0].title}
              link={projects[0].link}
              sshot={projects[0].sshot}
              desc={projects[0].desc}
            />
          </Col>

          <Col sm={4}>
            <Prjcard
              title={projects[1].title}
              link={projects[1].link}
              sshot={projects[1].sshot}
              desc={projects[1].desc}
            />
          </Col>

          <Col sm={4}>
            <Prjcard
              title={projects[2].title}
              link={projects[2].link}
              sshot={projects[2].sshot}
              desc={projects[2].desc}
            />
          </Col>

          <Col sm={4}>
            <Prjcard
              title={projects[3].title}
              link={projects[3].link}
              sshot={projects[3].sshot}
              desc={projects[3].desc}
            />
          </Col>
          <Col sm={4}>
            <Prjcard
              title={projects[4].title}
              link={projects[4].link}
              sshot={projects[4].sshot}
              desc={projects[4].desc}
            />
          </Col>

          <Col sm={4}>
            <Prjcard
              title={projects[5].title}
              link={projects[5].link}
              sshot={projects[5].sshot}
              desc={projects[5].desc}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
