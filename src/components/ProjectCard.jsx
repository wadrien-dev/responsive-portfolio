import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, tech, imgUrl }) => {
    return (
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
                <h5>{title}</h5>
                <span>{description}</span>
                <small>{tech}</small>
            </div>
        </div>
    )
}