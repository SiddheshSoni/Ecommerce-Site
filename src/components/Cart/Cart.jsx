import React from 'react'
import Table from 'react-bootstrap/Table';
import "./Cart.css"
import Button from 'react-bootstrap/esm/Button'
import Modal from '../../Modal/Modal'
import cartElements from '../../assets/cart-data';

const Cart = (props) => {
  const dummy = cartElements.map((item)=>{
    return(
      <tr key={item.title} className="cart-row" >
        <td className='cart-item'><img src={item.imageUrl} alt="" /> <span className="cart-title">{item.title}</span></td>
        <td>{item.price}</td>
        <td><input value={item.quantity}/> <Button variant='danger' className='m-0' >REMOVE</Button> </td>
      </tr>
    )
  });

  return (
      <Modal>
        <div className='cart-container'>
          <div className='d-flex align-items-center justify-content-between mb-3'>
            <h1>Cart</h1>
            <Button variant='danger' onClick={props.onClose}>Close</Button>
          </div>
            <div>
                <Table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummy}
                  </tbody>
                </Table>
            </div>
        </div>
      </Modal>
    
  
  )
}

export default Cart;