import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import "./Navigation.css"

const Navigation = (props) => {
  return (
    <>
        <Navbar className='navbar-dark bg-dark' >
            <Container className="justify-content-center">
                <Nav>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link active href="#">Store</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav> 
            </Container>
            <Button variant='info' onClick={props.onShowCart}>Cart</Button>
        </Navbar>
    </>
  )
}

export default Navigation