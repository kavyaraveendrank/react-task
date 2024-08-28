import React,{ Fragment } from "react";
import { Carousel,Container,Nav,Navbar,NavDropdown,Image,Card,Button,Row,Form,Col,Spinner} from "react-bootstrap";


const  Bootstrap = () =>{
    return (
       <Fragment>
                <Navbar expand="lg" style={{ backgroundColor: '#2c3e50', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', padding: '10px 20px', borderBottom: '3px solid #e67e22' }} sticky="top">
                <Container fluid>
                    <Navbar.Brand href="#" style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#ecf0f1', letterSpacing: '2px' }}>ShopEasy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Nav.Link href="#" style={{ fontSize: '1.1rem', color: '#ecf0f1', padding: '8px 15px', borderRadius: '5px', transition: 'background-color 0.3s', backgroundColor: '#e67e22' }}>Home</Nav.Link>
                            <Nav.Link href="#" style={{ fontSize: '1.1rem', color: '#ecf0f1', padding: '8px 15px', borderRadius: '5px', transition: 'background-color 0.3s' }}>Products</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    <Carousel>
      <Carousel.Item interval={2000}>
        <Image height={500} width={"100%"} src="https://plus.unsplash.com/premium_photo-1683121269108-1bd195cd18cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <Image  height={500} width={"100%"} src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <Image height={500} width={"100%"} src="https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
      </Carousel.Item>
    </Carousel>

    

    <h2 style={{marginTop:"80px",fontWeight:"600",fontSize:"50px"}} className="text-center">Featured Products</h2>
     <div className='d-flex gap-3 justify-content-around mt-5'>
     <Card className="p-3" style={{ width: "15rem", border: '2px solid #28a745', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card.Img style={{ objectFit: "cover", aspectRatio: '1/1', borderRadius: '10px 10px 0 0' }} variant="top" src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" />
                <Card.Body className="text-center">
                    <Card.Title style={{ color: '#28a745', fontSize: '1.2rem', margin: '10px 0' }}>Title</Card.Title>
                    <Card.Text style={{ fontSize: '0.9rem', marginBottom: '15px', color: '#6c757d' }}>This is a sample description.</Card.Text>
                    <Button variant="success w-100" style={{ backgroundColor: '#28a745', border: 'none', borderRadius: '5px' }}>View Product</Button>
                </Card.Body>
            </Card>

            <Card className="p-3" style={{ width: "15rem", border: '2px solid #dc3545', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card.Img style={{ objectFit: "cover", aspectRatio: '1/1', borderRadius: '10px 10px 0 0' }} variant="top" src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" />
                <Card.Body className="text-center">
                    <Card.Title style={{ color: '#dc3545', fontSize: '1.2rem', margin: '10px 0' }}>Title</Card.Title>
                    <Card.Text style={{ fontSize: '0.9rem', marginBottom: '15px', color: '#6c757d' }}>This is a sample description.</Card.Text>
                    <Button variant="danger w-100" style={{ backgroundColor: '#dc3545', border: 'none', borderRadius: '5px' }}>View Product</Button>
                </Card.Body>
            </Card>

            <Card className="p-3" style={{ width: "15rem", border: '2px solid #ffc107', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card.Img style={{ objectFit: "cover", aspectRatio: '1/1', borderRadius: '10px 10px 0 0' }} variant="top" src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" />
                <Card.Body className="text-center">
                    <Card.Title style={{ color: '#ffc107', fontSize: '1.2rem', margin: '10px 0' }}>Title</Card.Title>
                    <Card.Text style={{ fontSize: '0.9rem', marginBottom: '15px', color: '#6c757d' }}>This is a sample description.</Card.Text>
                    <Button variant="warning w-100" style={{ backgroundColor: '#ffc107', border: 'none', borderRadius: '5px' }}>View Product</Button>
                </Card.Body>
            </Card>

            <Card className="p-3" style={{ width: "15rem", border: '2px solid #17a2b8', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card.Img style={{ objectFit: "cover", aspectRatio: '1/1', borderRadius: '10px 10px 0 0' }} variant="top" src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" />
                <Card.Body className="text-center">
                    <Card.Title style={{ color: '#17a2b8', fontSize: '1.2rem', margin: '10px 0' }}>Title</Card.Title>
                    <Card.Text style={{ fontSize: '0.9rem', marginBottom: '15px', color: '#6c757d' }}>This is a sample description.</Card.Text>
                    <Button variant="info w-100" style={{ backgroundColor: '#17a2b8', border: 'none', borderRadius: '5px' }}>View Product</Button>
                </Card.Body>
            </Card>
    </div>

    <h3 className='text-center' style={{ marginTop: "50px", fontWeight: "600", marginBottom: "8px",fontSize:"40px"}} >Contact Us</h3>

      <Container>

         <Row>
          <Col xs={12} md={6}>
          <Form className="frm" style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>Contact Us</h3>
            
            <Form.Group className="mb-4" controlId="formName">
                <Form.Label style={{ fontWeight: 'bold', color: '#2c3e50' }}>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Eg: Kavya" 
                    style={{ borderRadius: '5px', padding: '10px', borderColor: '#ced4da' }} 
                />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label style={{ fontWeight: 'bold', color: '#2c3e50' }}>Email ID</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="kavya@123" 
                    style={{ borderRadius: '5px', padding: '10px', borderColor: '#ced4da' }} 
                />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPassword">
                <Form.Label style={{ fontWeight: 'bold', color: '#2c3e50' }}>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="1234..." 
                    style={{ borderRadius: '5px', padding: '10px', borderColor: '#ced4da' }} 
                />
            </Form.Group>

            <Button variant="success" type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
                Send Message
            </Button>
        </Form>
               
          </Col>
         </Row>

      </Container>
       </Fragment>
    )
}
export default Bootstrap