import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "react-multi-carousel/lib/styles.css";
import "animate.css";

const projects = [
  {
    title: "Appointment Scheduler Java App",
    category: "Full-Stack Java Application",
    description:
      "A full-stack appointment-management application with user verification, scheduling, search and filtering tools, editing and cancellation workflows, and an administrative dashboard.",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Data JPA",
      "Thymeleaf",
      "PostgreSQL",
      "Maven",
    ],
    repoUrl:
      "https://github.com/wadrien-dev/appointment-scheduler-java",
    liveUrl:
      "https://appointment-scheduler-java.onrender.com",
    imgUrl: projImg1,
  },
  {
    title: "From Big Dreams to Debugging",
    category: "Interactive React Experience",
    description:
      "A responsive storytelling website about creativity, leadership, technical growth, and becoming a software developer. It includes reusable components, multi-page navigation, and state-driven interaction.",
    tech: [
      "React",
      "TypeScript",
      "Responsive Design",
      "Reusable Components",
      "State Management",
    ],
    repoUrl:
      "https://github.com/wadrien-dev/from-big-dreams-to-debugging",
    liveUrl:
      "https://wadrien-dev.github.io/from-big-dreams-to-debugging/",
    imgUrl: projImg2,
  },
  {
    title: "Android Development Portfolio",
    category: "Mobile Application Collection",
    description:
      "A collection of Android projects including a directional compass, Magic 8 Ball app, soundboard app, and medical-provider portal prototype.",
    tech: [
      "Kotlin",
      "Java",
      "Android SDK",
      "Android Studio",
      "SQLite",
      "REST APIs",
    ],
    repoUrl:
      "https://github.com/wadrien-dev",
    imgUrl: projImg3,
  },
];

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1200,
    },
    items: 3,
  },

  tablet: {
    breakpoint: {
      max: 1200,
      min: 768,
    },
    items: 2,
  },

  mobile: {
    breakpoint: {
      max: 768,
      min: 0,
    },
    items: 1,
  },
};

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <div className="project-heading">
                    <span className="section-label">
                      Selected Work
                    </span>

                    <h2>Featured Projects</h2>

                    <p>
                      Selected software projects that reflect my
                      experience with full-stack development,
                      responsive interfaces, Android applications,
                      and iterative problem-solving.
                    </p>
                  </div>

                  <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={5500}
                    keyBoardControl
                    swipeable
                    draggable
                    showDots
                    arrows
                    partialVisible={false}
                    containerClass="portfolio-carousel"
                    itemClass="portfolio-carousel-item"
                    dotListClass="portfolio-carousel-dots"
                  >
                    {projects.map((project) => (
                      <ProjectCard
                        key={project.title}
                        {...project}
                      />
                    ))}
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};