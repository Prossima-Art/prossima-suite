import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LogoAi, LogoDev, LogoUx, LogoXr } from "./logos";
import "./hero.scss";

export class Hero extends Component {
  render() {
    return (
      <Container className="mx-auto heroComp mt-5 pt-5">
        <Row>
          <Col className="logosX">
            <LogoAi />
            <LogoDev />
            <LogoUx />
            <LogoXr />
          </Col>
        </Row>
        <Row className="m-auto">
          <Col>
            <h1>
              Power your Business Success, Explore the Future with our Resource
              Suite
            </h1>
          </Col>
        </Row>
        <Col className="mx-auto video mt-1 pt-1">
          <iframe
            width="860"
            height="415"
            src="https://www.youtube.com/embed/wby-PzPEXGQ?si=DlfJLiMraALI_T0i&amp;controls=0"
            title="YouTube video player"
            frameborder="20"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Col>
      </Container>
    );
  }
}

export default Hero;
