import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './prossimaUx.css'
import Card from './img/prossimaUx.png'

export default class ProssimaUx extends Component {
  render() {
    return (
      <Container fluid className="cardCompUx my-5" xs={12} >
        <Row className="mx-auto">
            <Col>
            <img className="imgUx" src={Card} width={500} height={300} alt="prossima ai logo"/>
            </Col>
            <Col className="textcardUx">
                <span className='textdecorationUx'>UI / UX Design</span>
                <p className="subtitle"> Crafting Intuitive and Engaging User Experiences</p>
                <p className='paragrafo'> By prioritizing user-centric design principles, we help businesses unlock their full potential and deliver exceptional digital experiences that leave a lasting impression.</p>
            </Col>
        </Row>
        </Container>
    )
  }
}