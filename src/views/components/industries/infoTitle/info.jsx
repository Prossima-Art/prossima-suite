import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./info.css";

export const Ecommerce = () => {
  return (
    <Container fluid className="mt-5 containerComp" xs={12} md={12}>
      <Row  className="colComp">
        <Col xs={12} md={5} sm={12} >
          <h1 className="center">E-commerce and retail</h1>
          <h1 className="typography position">01</h1>
        </Col>
        <Col xs={12} md={5} sm={12}>
        <p className="subtitle"> Accelerate growth with retail megatrends</p>
        <p className="smalltext"> Implement an AI-powered and customer-centred approach and stay competitive. Build delightful customer experiences, engagement, and loyalty with a new level of personalization, conversational technology, and AR.</p>
        </Col>
      </Row>
    </Container>
  );
};



export const Finance = () => {
  return (
    <Container fluid className="mt-5 containerComp" xs={12} md={12}>
      <Row  className="colComp">
        <Col xs={12} md={5} sm={12} >
          <h1 className="center">Finance and banking</h1>
          <h1 className="typography position">02</h1>
        </Col>
        <Col xs={12} md={5} sm={12}>
        <p className="subtitle"> Adapting to Financial Shifts: Empowering Client Experience</p>
        <p className="smalltext"> The global financial landscape is constantly shifting. Your success will depend on the ability to adjust to the evolving environment and provide your clients with an amazing digital experience.</p>
        </Col>
      </Row>
    </Container>
  );
};



export const Healthcare = () => {
  return (
    <Container fluid className="mt-5 containerComp" xs={12} md={12}>
      <Row  className="colComp">
        <Col xs={12} md={5} sm={12} >
          <h1 className="center">Healthcare</h1>
          <h1 className="typography position">03</h1>
        </Col>
        <Col xs={12} md={5} sm={12}>
        <p className="subtitle">Revolutionizing Healthcare: Embrace Digital Acceleration</p>
        <p className="smalltext">Be at the forefront of digital acceleration in healthcare. Make the most of automated administrative management, cost reduction, and remote patient diagnosis and treatment.</p>
        </Col>
      </Row>
    </Container>
  );
};


export const Education = () => {
  return (
    <Container fluid className="mt-5 containerComp" xs={12} md={12}>
      <Row  className="colComp">
        <Col xs={12} md={5} sm={12} >
          <h1 className="center">Education</h1>
          <h1 className="typography position">04</h1>
        </Col>
        <Col xs={12} md={5} sm={12}>
        <p className="subtitle">Transforming Education: Embrace Digital Learning Experiences</p>
        <p className="smalltext">Education is going digital, with online platforms, VR, AR, and AI tools being utilized to support students and teachers. Build next-gen digital learning experiences to foster user engagement and attract broad audiences.</p>
        </Col>
      </Row>
    </Container>
  );
};



export const Food = () => {
  return (
    <Container fluid className="mt-5 containerComp" xs={12} md={12}>
      <Row  className="colComp">
        <Col xs={12} md={5} sm={12} >
          <h1 className="center">Food service</h1>
          <h1 className="typography position">04</h1>
        </Col>
        <Col xs={12} md={5} sm={12}>
        <p className="subtitle">Experience the Culinary Revolution: Embrace Next-Gen Food Service Solutions</p>
        <p className="smalltext">Transform the Gastronomic Experience, with a modern website and AI tools to improve your service. Create new digital experiences to promote your business and attract a wider audience.</p>
        </Col>
      </Row>
    </Container>
  );
};



export const SaaS = () => {
  return (
    <Container fluid className="mt-5 containerComp" xs={12} md={12}>
      <Row  className="colComp">
        <Col xs={12} md={5} sm={12} >
          <h1 className="center">SaaS</h1>
          <h1 className="typography position">04</h1>
        </Col>
        <Col xs={12} md={5} sm={12}>
        <p className="subtitle">Powerful Tools for Your SaaS Company: Website Development, AI, and XR</p>
        <p className="smalltext">Embracing these technologies in the SaaS sector opens up a world of possibilities for businesses to differentiate themselves, improve operational efficiency, and deliver exceptional user experiences.</p>
        </Col>
      </Row>
    </Container>
  );
};