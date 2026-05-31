import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";

const initialFormDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const API_BASE_URL = (
  import.meta.env.VITE_API_URL || ""
).replace(/\/$/, "");

export const Contact = () => {
  const [formDetails, setFormDetails] =
    useState(initialFormDetails);

  const [buttonText, setButtonText] =
    useState("Send Message");

  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails((currentDetails) => ({
      ...currentDetails,
      [category]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setButtonText("Sending...");
    setStatus({});

    try {
      const response = await fetch(
        `${API_BASE_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        }
      );

      const result = await response
        .json()
        .catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Your message could not be sent. Please try again."
        );
      }

      setFormDetails(initialFormDetails);

      setStatus({
        success: true,
        message: "Message sent successfully!",
      });
    } catch (error) {
      setStatus({
        success: false,
        message:
          error.message ||
          "The contact form is temporarily unavailable.",
      });
    } finally {
      setButtonText("Send Message");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : ""
                  }
                  src={contactImg}
                  alt="Contact illustration"
                />
              )}
            </TrackVisibility>
          </Col>

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
                  <h2>Get in Touch</h2>

                  <p className="contact-intro">
                    Have a question, opportunity, or project
                    idea? Send a message and I&apos;ll follow up.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          required
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(event) =>
                            onFormUpdate(
                              "firstName",
                              event.target.value
                            )
                          }
                        />
                      </Col>

                      <Col xs={12} sm={6} className="px-1">
                        <input
                          required
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(event) =>
                            onFormUpdate(
                              "lastName",
                              event.target.value
                            )
                          }
                        />
                      </Col>

                      <Col xs={12} sm={6} className="px-1">
                        <input
                          required
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(event) =>
                            onFormUpdate(
                              "email",
                              event.target.value
                            )
                          }
                        />
                      </Col>

                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone Number (Optional)"
                          onChange={(event) =>
                            onFormUpdate(
                              "phone",
                              event.target.value
                            )
                          }
                        />
                      </Col>

                      <Col xs={12} className="px-1">
                        <textarea
                          required
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(event) =>
                            onFormUpdate(
                              "message",
                              event.target.value
                            )
                          }
                        />

                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status.message && (
                        <Col xs={12}>
                          <p
                            role="status"
                            className={
                              status.success
                                ? "success"
                                : "danger"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};