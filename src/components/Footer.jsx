import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/woodna-adrien-9b0007230/" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://github.com/wadrien-dev"><img src={navIcon2} alt="GitHub" /></a>
                            <a href="#"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <p>Copyright 2025. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}