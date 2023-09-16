import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./faq.css"
import FAQ from "./faq"
import Paper from "./paper"

export default class FaqSection extends Component {
  render() {
    return (
      <Container fluid className="my-5">
        <Row className="mx-auto heroComp">
        <Col className="mx-auto" md={12}>
            <h1>Find the answers you need</h1>
        </Col>
        </Row>
        <Row className="mx-auto adjutsment">
        
          <Col md={5} className="mt-4 ">
            <FAQ/>
          </Col>
          <Col md={5}>
          
            <Paper/>
          </Col>
        </Row>
      </Container>
    );
  }
}
