import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const MainNavBar = () => {
  
  return (
    <>
      <Navbar expand='lg' className='customNav'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/completed-projects">COMPLETED PROJECTS</Nav.Link>
            <Nav.Link href="/ongoing-projects">ONGOING PROJECTS</Nav.Link>
            <Nav.Link href="/contact-us">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
 
export default MainNavBar;