import React from 'react';
import { Card, Button, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Tarjeta = (props) => {
    
    return (
        <Card className='Card'>
            <Card.Img variant="top" src="https://picsum.photos/200/200" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant={props.variante}>Goo somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Tarjeta;