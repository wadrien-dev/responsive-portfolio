import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img
              src={logo}
              alt="Woodna Adrien logo"
            />
          </Col>

          <Col
            xs={12}
            sm={6}
            className="text-center text-sm-end"
          >
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/woodna-adrien-9b0007230/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <img src={navIcon1} alt="" />
              </a>

              <a
                href="https://github.com/wadrien-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <img src={navIcon2} alt="" />
              </a>
            </div>

            <p>
              © {year} Woodna Adrien. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};