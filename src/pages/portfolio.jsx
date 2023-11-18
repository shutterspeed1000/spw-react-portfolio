import Prjcard from "../components/prjcard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const projects = [
  {
    title: "Vacationator",
    link: "https://microsoft.com",
    sshot:
      "https://kinsta.com/wp-content/uploads/2021/11/about-us-page-1024x512.png",
    desc: "Quick example of a MVC HR application with security groups and email alerts.",
  },
  {
    title: "Vacationator",
    link: "https://microsoft.com",
    sshot:
      "https://kinsta.com/wp-content/uploads/2021/11/about-us-page-1024x512.png",
    desc: "Quick example of a MVC HR application with security groups and email alerts.",
  },
  {
    title: "Vacationator",
    link: "https://microsoft.com",
    sshot:
      "https://kinsta.com/wp-content/uploads/2021/11/about-us-page-1024x512.png",
    desc: "Quick example of a MVC HR application with security groups and email alerts.",
  },
  {
    title: "Vacationator",
    link: "https://microsoft.com",
    sshot:
      "https://kinsta.com/wp-content/uploads/2021/11/about-us-page-1024x512.png",
    desc: "Quick example of a MVC HR application with security groups and email alerts.",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Container>
        <Row>
          <Col sm={6}>
            <Prjcard
              title={projects[0].title}
              link={projects[0].link}
              sshot={projects[0].sshot}
              desc={projects[0].desc}
            />
          </Col>
          <Col sm={6}>
          <Prjcard
              title={projects[1].title}
              link={projects[1].link}
              sshot={projects[1].sshot}
              desc={projects[1].desc}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
          <Prjcard
              title={projects[2].title}
              link={projects[2].link}
              sshot={projects[2].sshot}
              desc={projects[2].desc}
            />
          </Col>
          <Col sm={6}>
          <Prjcard
              title={projects[3].title}
              link={projects[3].link}
              sshot={projects[3].sshot}
              desc={projects[3].desc}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
