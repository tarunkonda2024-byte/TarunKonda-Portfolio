import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* <img src={C} alt="C++" /> */}
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <img src={Javascript} alt="javascript" /> */}
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <img src={Typescript} alt="typescript" /> */}
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <img src={Go} alt="go" /> */}
        <div className="tech-icons-text">Kotlin</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Android</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">SQ Lite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Android SDK</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Agile</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">CI/CD</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Crashlytics</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">IOS - React</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">React Native</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">MVVM</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Material UI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Clean architecture</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">AWS</div>
      </Col>

    </Row>
  );
}

export default Techstack;
