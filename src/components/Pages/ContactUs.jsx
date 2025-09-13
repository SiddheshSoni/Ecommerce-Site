import React from 'react'
import { Button } from 'react-bootstrap'

const ContactUs = () => {
  const API_BASE = "https://moviedata-9a9ab-default-rtdb.asia-southeast1.firebasedatabase.app/"
  const addContact= async (newUser)=>{
    try{
      const response = await fetch(`${API_BASE}/users.json`,{
        method:'POST',
        body:JSON.stringify(newUser),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
    }
    catch(error){
      console.log(error);
      console.log("Something went Wrong!!!");
    }
  };

  const FormSubmitHandler=(e)=>{
    e.preventDefault();
    const newUser={
      name:e.target.name.value,
      email:e.target.email.value,
      phone:e.target.phone.value,
    }
    // console.log(newUser);
    addContact(newUser);
    e.target.reset();
  };

  return <>
      <div className='d-flex justify-content-center mt-5'>
        <form onSubmit={FormSubmitHandler}>
          <div className="mb-3">
            <label htmlFor='name' className='form-label' >Name</label>
            <input id='name' name='name' type='text'  className='form-control'/>
          </div>
          <div className="mb-3">
            <label htmlFor='email' className='form-label'>Email</label>
            <input id='email' name='email' type='email' className='form-control'/>
          </div>
          
          <div className="mb-3">
            <label htmlFor='phone' className='form-label'>Phone No.</label>
            <input id='phone' name='phone' type='tel' className='form-control'/>
          </div>
          <div className='mb-3'>
            <Button type='submit' variant="primary" >Submit</Button>
          </div>
        </form>
      </div>
  </>
}

export default ContactUs