import { useState, useEffect } from "react";
import { Container,Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom"; 
import { HashLink } from "react-router-hash-link";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const initialDelta = 300 - (Math.random() *100);

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(initialDelta);
    const [index, setIndex] = useState(1);
    const toRotate = [" | Software Developer", " | Android Developer", "| CS Student (May 2026)"];
    const period = 2000;


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    };

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} x1={7}>
                        <TrackVisibility>
                            {({ isVisible}) =>
                            <div className={isVisible ? "animate_animated animate_fadeIn": ""}>
                                <span className="tagline">Welcome to my Portfolio!</span>
                                <h1>{`Hi, I'm Woodna Adrien `}<span className="txt-rotate" dataPeriod="1000"data-rotate='["Software Developer", "Android", "Cloud", "AI Tools", "CS Student (May 2026)"]'><span className="wrap">{text}</span></span></h1>
                                <p>I'm a Software Engineer and Computer Science student at Wilmington University.
                                    I specialized in mobile app development, React-based web interfaces, and full-stack experimentation.
                                </p>
                                <Router>
                                    <HashLink to="#connect">
                                        <button onClick={() => console.log('connect')}>
                                            Let's Connect <ArrowRightCircle size={25} />
                                        </button>
                                    </HashLink>
                                </Router>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate_animated animate_zoomIn" : ""}>
                                <img src={headerImg} alt="Header Img" />
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}