import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                Hi everyone! I’m <span className="purple">Tarun Konda</span>{" "}
            from <span className="purple">Hyderabad, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Senior Software Engineer</span> at{" "}
            <span className="purple">TCS</span>.
            <br /> 9+ years of experience building high-performance mobile apps using Android (Kotlin/Java) and React Native. Skilled in developing scalable applications for banking, healthcare, and social platforms.
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
