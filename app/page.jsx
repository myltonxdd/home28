"use client"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main >
      
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        <Navbar.Brand href="#">Edie</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="me-auto d-flex">
            <h4></h4>
          </Form>
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action1">OurWork</Nav.Link>
            <Nav.Link href="#action2">Client</Nav.Link>
            <Nav.Link href="#action1">Contact</Nav.Link>
                       
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className='d-flex flex-column gap-2'>
      <div className='my-5'>
        <h4 className='mx-5 fs-5 text-primary'>Unhappy with your website?</h4>
        <h2 className='mx-5 fs-1'>We create beautiful and fast web services</h2>
      </div>

      <Image src={"/heroImage.jpg"} width={200} height={200} layout='responsive'/>

      <div className='d-flex flex-column mx-5' style={{maxWidth:"15rem"}}>
        <h2>Story, emotion and purpose</h2>
        <p>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
        <p>Want us to contact you?</p>
        <div>
          <input type="Email" />
          <button >Join</button>
        </div>
      </div>

    </Container>

    

    </main>
  )
}
