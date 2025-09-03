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
            <Container className="justify-content-center">
                <Nav>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link active href="/">Store</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav> 
            </Container>
            <Button className='d-flex gap-1' variant='info' onClick={props.onShowCart}>
              Cart <Badge pill bg ="dark" >{totalItems}</Badge>
            </Button>
            
        </Navbar>
    </>
  )
}

export default Navigation