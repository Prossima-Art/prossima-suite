import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import mediumLogo from "./img/mediumLogo.png";
import "./faq.css";

export default class Paper extends Component {
  render() {
    return (
      <Container className="PaperComp">
        <Row className="boxShadow p-2 md-2">
          <Col  className="mediumLogo " xs={1}>
            <img
              className="mediumLogo"
              src={mediumLogo}
              width={33}
              height={34}
              alt="medium logo"
            /></Col>
            <Col className="boxSize">
            <p className="paragrafoBlack">
              UI/UX strategies for the Omnichannel B2B model of the Yup Chat
              platform
            </p>
            <p className="smalltext">
              Greater efficiency and autonomy in the customer service sector
            </p>
          </Col>
        </Row>

        <Row className="boxShadow p-2">
          <Col  className="mediumLogo " xs={1}>
            <img
              className="mediumLogo"
              src={mediumLogo}
              width={33}
              height={34}
              alt="medium logo"
            /></Col>
            <Col className="boxSize">
            <p className="paragrafoBlack">
            The AI Revolution in Design: Redefining the Way We Create
            </p>
            <p className="smalltext">
            The AI Revolution in Design: Redefining the Way We Create
            </p>
          </Col>
        </Row>
        <Row className="boxShadow p-2">
          <Col  className="mediumLogo " xs={1}>
            <img
              className="mediumLogo"
              src={mediumLogo}
              width={33}
              height={34}
              alt="medium logo"
            /></Col>
            <Col className="boxSize">
            <p className="paragrafoBlack">
            Standardizing the Design Systems by tokenization: Integrating designers and developers workflows
            </p>
            <p className="smalltext">
            Aren’t you tired of having to manually update every element of your UI design? Don’t you find it hard to maintain consistency across your…
            </p>
          </Col>
        </Row>  
      </Container>
    );
  }
}
