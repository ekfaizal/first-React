import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='fixed-top'>
        <Container className='text-text-center align-content-center justify-content-center'>
         <h1 className='text-white'>React App React App React App</h1>
        </Container>
      </Navbar>
      </>
  )
}

export default Header