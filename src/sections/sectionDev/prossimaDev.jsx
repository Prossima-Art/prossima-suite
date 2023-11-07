import React, { Component } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './prossimaDev.css'
import Card from './img/prossimaDev.png'

export default class ProssimaDev extends Component {
  render() {
    return (
      <Container fluid className="cardCompDev my-5 pb-5" xs={12} >
        <Row className="mx-auto">
          <Col className="textcardDev">
            <span className='textdecorationDev'>Websites Development</span>
            <h1 className="subtitle"> Driving Business Growth through Powerful Website Development Solutions</h1>
            <p className='paragrafo'> We work closely with you to understand your unique needs and objectives, and then create custom websites that are visually appealing, user-friendly, and fully functional.</p>
          </Col>
          <Col xs={12} md={6} sm={12}>
            <Image className="imgDev" src={Card} alt="prossima ai logo" loading='lazy' fluid />
          </Col>
        </Row>
      </Container>
    )
  }
}