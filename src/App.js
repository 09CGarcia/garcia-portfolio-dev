import React from 'react'

import Navbar from './components/Navbar'
import Card from './components/Card'
import Jumbo from './components/Jumbo'
import Footer from './components/Footer'

import { Container, Row, Col } from 'react-bootstrap'
export default function App(){
  return(
    <>
      <Navbar/>
      <Jumbo/>
      <Container>
        <Row>
          <Col><Card/></Col>
        </Row>
      </Container>
      <Footer/>

    </>

  )
}
