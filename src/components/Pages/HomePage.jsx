import React from 'react'
import Table from 'react-bootstrap/Table';
import Section from '../UI/Section'
import { Button } from 'react-bootstrap';
const HomePage = () => {
  const dummy = <tbody><tr>
        <td>JUL 16</td>
        <td>Detroit, MI</td>
        <td>DTE ENERGY MUSIC THEATRE</td>
        <td>
          <Button  variant="info" className='text-white bg-info fw-bold'>BUY TICKETS</Button>
        </td>
      </tr>
      <tr>
        <td>JUL 16</td>
        <td>Detroit, MI</td>
        <td>DTE ENERGY MUSIC THEATRE</td>
        <td>
          <Button variant="info" className='text-white bg-info fw-bold'>BUY TICKETS</Button>
        </td>
      </tr>
      <tr>
        <td>JUL 16</td>
        <td>Detroit, MI</td>
        <td>DTE ENERGY MUSIC THEATRE</td>
        <td>
          <Button  variant="info" className='text-white bg-info fw-bold'>BUY TICKETS</Button>
        </td>
      </tr></tbody>

  return <Section>
    <div className='container' style={{"maxWidth":"900px", "fontSize":"15px"}}>
    <h1>Tours</h1>
    <Table>
      {dummy}
    </Table>
    </div>
  </Section>
}

export default HomePage