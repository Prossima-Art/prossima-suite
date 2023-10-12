import React from "react";
import { LogoAi, LogoDev, LogoUx, LogoXr } from "../../../sections/hero/logos";
import { Col, Container, Row } from "react-bootstrap";


function BlogHero() {
   return (
    <>
      <Container  className="mx-auto heroComp mt-5 pt-5">
        <Row  >
          <Col className="logosX">
            <LogoAi />
            <LogoDev />
            <LogoUx />
            <LogoXr />
          </Col>
        </Row>
        <Row className="m-auto">
          <Col>
            <h1>Exploring new horizons: <br></br>Get inspired, learn and discover!</h1>
          </Col>
        </Row>
        </Container>
      
    </>
  );
}

export default BlogHero;




