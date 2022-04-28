import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tarjeta from './Card'

const Cards = () => {
    return (
        <Container className='container-cards'>
            <Row className='row-cards'>
                <Col>
                    <Tarjeta variante="danger" />
                </Col>
                <Col>
                    <Tarjeta variante="primary" />
                </Col>
                <Col>
                    <Tarjeta variante="secondary" />
                </Col>
                <Col>
                    <Tarjeta variante="dark" />
                </Col>
            </Row>
        </Container>
    )
}

export default Cards;