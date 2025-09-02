import React from 'react'
import "./Footer.css"
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
const Footer = () => {
  return (
    <footer>
        <Row className=' text-light bg-info'>
        <div className="footer-title"> The Generics </div>
        <div className='footer-icons'>
            <ul className='d-flex'>
                <li>
                    <a href="https://www.youtube.com">
                    <img src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="" /></a>
                </li>
                <li>
                    <a href="https://spotify.com">
                    <img src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png" alt="" /></a>
                </li>
                <li>
                    <a href="https://facebook.com">
                    <img src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png" alt="" /></a>
                </li>
            </ul>
        </div>
        </Row>
    </footer>
  )
}

export default Footer