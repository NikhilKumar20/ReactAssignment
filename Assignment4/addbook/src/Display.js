import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from 'reactstrap';

const Display = () => {
   const location =useLocation();
  return (
    <Container>
    <h3>Hello {location.state.name} and {location.state.author1} and {location.state.gerne} welcome your login is successful go to all hello todos </h3>
    
</Container>
  )
}

export default Display