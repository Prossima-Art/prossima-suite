import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './prossimaAi.css'
import Card from './img/prossimaAi.png'
import Image from 'react-bootstrap/Image';
export default class ProssimaAi extends Component {
  render() {
    return (
      <Container fluid className="cardComp my-5 pb-5" xs={12}>
        <Row className="mx-auto">
          <Col xs={12} md={6} sm={12}>
            <Image className="imgAi" src={Card} alt="prossima ai logo" loading='lazy' fluid />
          </Col>
          <Col className="textcard" xs={12} md={6} sm={12}>
            <span className='textdecoration'>AI & ML Solutions for Business</span>
            <p className="subtitle"> Empowering Business with AI & ML Solutions</p>
            <p className='paragrafo'> Prossima AI offers a complete and seamless API service, data analytics, sales performance service for cross-site interactions and sales and delivery platforms.</p>
          </Col>
        </Row>
      </Container>
    )
  }
}
