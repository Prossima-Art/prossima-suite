import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './prossimaDev.css'
import Card from './img/prossimaDev.png'

export default class ProssimaDev extends Component {
  render() {
    return (
      <Container fluid className="cardCompDev my-5" xs={12} >
        <Row className="mx-auto">
            <Col className="textcardDev">
                <span className='textdecorationDev'>Websites Development</span>
                <p className="subtitle"> Driving Business Growth through Powerful Website Development Solutions</p>
                <p className='paragrafo'> We work closely with you to understand your unique needs and objectives, and then create custom websites that are visually appealing, user-friendly, and fully functional.</p>
            </Col>
            <Col>
            <img className="imgDev" src={Card} width={500} height={300} alt="prossima ai logo"/>
            </Col>
        </Row>
        </Container>
    )
  }
}