import {useState, useEffect} from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom"; 
import { HashLink } from "react-router-hash-link";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled]= useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <BootstrapNavbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </BootstrapNavbar.Brand>
                    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav"><span className="navbar-toggler-icon"></span></BootstrapNavbar.Toggle>
                    <BootstrapNavbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#link" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="#"><img src={navIcon1} alt=""></img></a>
                                <a href="#"><img src={navIcon2} alt=""></img></a>
                                <a href="#"><img src={navIcon3} alt=""></img></a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let's Connect</span></button>
                            </HashLink>
                        </span>
                    </BootstrapNavbar.Collapse>
                </Container> 
            </BootstrapNavbar>
        </Router>
       
    )
} 