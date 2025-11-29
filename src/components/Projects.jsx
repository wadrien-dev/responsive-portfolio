import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "Compass App",
            description: "Android compass using device magnetometer sensor.",
            tech: "Kotlin, Android SDK",
            link: "",
            imgUrl: projImg1
        },

        {
            title: "Magic 8 Ball App",
            description: "Kotlin app giving randomized answers like a real 8 ball.",
            tech: "Kotlin, Android Studio",
            link: "",
            imgUrl: projImg2
        },

        {
            title: "Medical Provider Portal",
            description: "Design & Development",
            tech: "XML, Firebase, Android",
            link: "",
            imgUrl: projImg1, // projImg3 - need to replace w/ appropriate img
        },

        {
            title: "Soundboard App",
            description: "Simple soundboard app with custom UI and effects.",
            tech: "Kotlin, MediaPlayer API",
            link: "",
            imgUrl: projImg2, // projImg4 - nonexistent 
        },

        {
            title: "Compass App",
            description: "Android compass using device magnetometer sensor.",
            tech: "Kotlin, Android SDK",
            link: "",
            imgUrl: projImg1
        },

        {
            title: "Magic 8 Ball App",
            description: "Kotlin app giving randomized answers like a real 8 ball.",
            tech: "Kotlin, Android Studio",
            link: "",
            imgUrl: projImg2
        }
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1,
        },

        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 1,
        },

        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1, 
            slidesToSlide: 1
        },
    };

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                            <div className={isVisible ? "animate_animated animate_fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>Here are a few Android apps I've built as part of my developmer journey.</p>
                                
                                    <Carousel responsive={responsive}>
                                        {
                                            projects.map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            ))
                                        }
                                    </Carousel>
                            </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={"color-sharp.png"}></img>
        </section>
    )
}