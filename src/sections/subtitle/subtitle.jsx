import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./subtitle.css";

export default class Subtitle extends Component {
  render() {
    return (
      <Container fluid className="mx-auto subtitleComp m"xs={12}>
        <Row className="mx-auto">
          <Col className="col-md-auto">
            <p className="title2">
              {" "}
              Productivity and efficiency tools for all companies.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
