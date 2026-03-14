import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Tarun Konda</span>{" "}
            from <span className="purple">Hyderabad, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Senior Software Engineer</span> at{" "}
            <span className="purple">TCS</span>.
            <br /> 9+ years of experience building high-performance mobile apps using Android (Kotlin/Java) and React Native. Skilled in developing scalable applications for banking, healthcare, and social platforms.
{/* 
            <span className="purple">Mathematics and Computing</span> from{" "}
            <span className="purple">BIT Mesra</span>. */}
            <br /> 
            <br />


          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
