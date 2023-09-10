import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './prossimaAi.css'
import Card from './img/prossimaAi.png'

export default class ProssimaAi extends Component {
  render() {
    return (
      <Container fluid className="cardComp my-5" xs={12} >
        <Row className="mx-auto">
            <Col>
            <img className="imgAi" src={Card} width={500} height={300} alt="prossima ai logo"/>
            </Col>
            <Col className="textcard">
                <span className='textdecoration'>AI & ML Solutions for Business</span>
                <p className="subtitle"> Empowering Business with AI & ML Solutions</p>
                <p className='paragrafo'> Prossima AI offers a complete and seamless API service, data analytics, sales performance service for cross-site interactions and sales and delivery platforms.</p>
            </Col>
        </Row>
        </Container>
    )
  }
}
