import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/img/header-img.png";
import "animate.css";

const roles = [
  "Software Developer",
  "Application Support",
  "QA Testing",
  "Android Developer",
];

export const Banner = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    const isComplete = text === activeRole;
    const isEmpty = text === "";

    const delay =
      isComplete && !isDeleting
        ? 1400
        : isDeleting
          ? 55
          : 95;

    const timeout = setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);

        setRoleIndex((currentIndex) => {
          return (currentIndex + 1) % roles.length;
        });

        return;
      }

      setText((currentText) => {
        return isDeleting
          ? activeRole.substring(0, currentText.length - 1)
          : activeRole.substring(0, currentText.length + 1);
      });
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [isDeleting, roleIndex, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <span className="tagline">
                    Computer Science Graduate
                  </span>

                  <h1>
                    Hi, I&apos;m Woodna Adrien
                    <span className="txt-rotate">
                      <span className="wrap"> | {text}</span>
                    </span>
                  </h1>

                  <p>
                    I build user-focused applications and enjoy solving
                    technical problems through software development,
                    application troubleshooting, and quality testing. My
                    projects include Java and Spring Boot applications,
                    React interfaces, and Android mobile apps.
                  </p>

                  <a href="#connect" className="banner-link">
                    Let&apos;s Connect
                    <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Illustration representing software development"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};