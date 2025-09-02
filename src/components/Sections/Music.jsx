import React from 'react'
import productsArr from '../../assets/data'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import "./Music.css"

const Music = () => {
    const products= productsArr.map((item , index)=>{
        return(
            <Col className="" key={index}>
            <Card className='border-0 text-center' style={{ "maxHeight":"", "maxWidth":"300px"}} key={index}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Img variant='top' className="card-img-top"  style={{"maxWidth":"250px", "maxHeight":"250px", objectFit: "cover", margin: "0 auto"}} src={item.imageUrl} />
                <div className="d-flex justify-content-between align-items-center mt-3 px-2">
                    <Card.Text className='mb-0'>${item.price}</Card.Text>
                    <Button size="sm" variant='info'>Add to Cart</Button>
                </div>

            </Card>
            </Col>
        )
    });

    return (
        <section className='d-flex justify-content-center container'>
            <Row className="g-0" xs={1} md={2} >{products}</Row>
        </section>
    )
}

export default Music