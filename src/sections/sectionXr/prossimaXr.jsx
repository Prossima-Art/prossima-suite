import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './prossimaXr.css'
import Card from './img/prossimaXr.png'

export default class ProssimaXr extends Component {
  render() {
    return (
      <Container fluid className="cardCompXr my-5" xs={12} >
        <Row className="mx-auto">
            <Col className="textcardXr">
                <span className='textdecorationXr'>VR/ AR Applications</span>
                <p className="subtitle"> Elevating Business Experiences with Immersive Applications</p>
                <p className='paragrafo'> Embrace the future of enterprise and stay ahead of the competition. Revolutionize the way you work, communicate, and innovate, and unlock a world of endless possibilities for your business.</p>
            </Col>
            <Col>
            <img className="imgXr" src={Card} width={500} height={300} alt="prossima ai logo"/>
            </Col>
        </Row>
        </Container>
    )
  }
}