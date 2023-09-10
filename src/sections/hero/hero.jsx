import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LogoAi, LogoDev, LogoUx, LogoXr } from "./logos";
import "./hero.css";
import VideoPlay from "./videoPlay";

export class Hero extends Component {
  render() {
    return (
      <Container fluid className="mx-auto heroComp mt-5"xs={12}>
          <Row className="mx-auto" >
        <Col className="logosX">
            <LogoAi/>
            <LogoDev />
            <LogoUx />
            <LogoXr />
        </Col>
          </Row>
          <Row className="m-auto">
        <Col>
        
            <h1>Power your Business Success, Explore the Future with our Resource Suite</h1>
        </Col>
          </Row>
        <Col>
        <VideoPlay/>
        </Col>
      </Container>
    );
  }
}

export default Hero;