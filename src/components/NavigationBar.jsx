import { useEffect, useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
} from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";

export const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <BootstrapNavbar
      expand="lg"
      expanded={expanded}
      className={scrolled ? "scrolled" : ""}
    >
      <Container>
        <BootstrapNavbar.Brand
          href="#home"
          aria-label="Woodna Adrien portfolio home"
          onClick={() => {
            setActiveLink("home");
            closeMenu();
          }}
        >
          <img src={logo} alt="Woodna Adrien logo" />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="portfolio-navbar"
          onClick={() =>
            setExpanded((currentValue) => !currentValue)
          }
        >
          <span className="navbar-toggler-icon" />
        </BootstrapNavbar.Toggle>

        <BootstrapNavbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            {[
              ["home", "Home"],
              ["skills", "Skills"],
              ["projects", "Projects"],
            ].map(([target, label]) => (
              <Nav.Link
                key={target}
                href={`#${target}`}
                className={
                  activeLink === target
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  setActiveLink(target);
                  closeMenu();
                }}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>

          <span className="navbar-text">
            <span className="social-icon">
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
            </span>

            <a href="#connect" onClick={closeMenu}>
              <button type="button" className="vvd">
                <span>Let&apos;s Connect</span>
              </button>
            </a>
          </span>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};