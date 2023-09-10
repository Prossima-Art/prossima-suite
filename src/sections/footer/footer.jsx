import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./footer.css";
import {
  InstagramIcon,
  LinkedinIcon,
  MenssagerIcon,
  EmailIcon,
} from "./socialIcons";
import { Logo } from "../../logo";

export default class Footer extends Component {
  render() {
    return (
      <Container fluid className="footer px-5">
        <Row>
          <Col className="text-left" gab={3}>
            <p>Follow |</p>
            <InstagramIcon />
            <LinkedinIcon />
            <MenssagerIcon />
            <EmailIcon />
          </Col>
          <Row>
            <Col className="logo">
                <Logo/> 
              <p className="mx-2">© All Rights Reserved.</p>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}
