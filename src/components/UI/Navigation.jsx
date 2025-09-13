import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import "./Navigation.css"
import Badge from 'react-bootstrap/Badge';
import ItemContext from '../store/ItemContext';

const Navigation = (props) => {
  const {items} = useContext(ItemContext);
  let totalItems = items.length;
  return (
    <>
        <Navbar className='navbar-dark bg-dark fixed-top' >
            <Container fluid className="d-flex justify-content-between align-items-center">

                <div style={{ width: "80px" }}></div>

                <Nav className="mx-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/">Store</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact US</Nav.Link>
                </Nav> 
            <Button className='d-flex gap-1' variant='info' onClick={props.onShowCart}>
              Cart <Badge pill bg ="dark" >{totalItems}</Badge>
            </Button>
            </Container>
            
        </Navbar>
    </>
  )
}

export default Navigation

