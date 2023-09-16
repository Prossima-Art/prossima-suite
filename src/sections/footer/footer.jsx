import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./footer.css";
import {
  InstagramIcon,
  LinkedinIcon,
  MenssagerIcon,
  EmailIcon,
} from "./socialIcons";
import { Logo } from "../../logo";
import { useState } from "react";
import { useEffect } from "react";

export default function Footer() {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    });
  useEffect(() => (window.onresize = updateSize), []);
  const mobileSize = 780;
  return (
    <Container fluid className="footer">
      <Row>
        <Col className={`text-left ${size.x <= mobileSize ? 'mobile' : ''}`} gab={3}>
          <p>Follow |</p>
          <InstagramIcon />
          <LinkedinIcon />
          <MenssagerIcon />
          <EmailIcon />
        </Col>
        <Row>
          <Col className="logo" xs={12}>
            <Logo />
            <p className="mx-0">© All Rights Reserved.</p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
