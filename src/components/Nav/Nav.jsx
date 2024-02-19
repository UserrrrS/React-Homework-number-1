import { Display, Justify, JustifyRight } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./index.css"

function CollapsibleExample() {
  return (
    <Navbar bg="transparent" collapseOnSelect expand="lg" className="Main_nav bg-body-transparent">
      <Container>
        <Navbar.Brand className="col-4" href="#home"><img src="/images/logo_EdSpase.svg" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link className="col-6" href="#features">Возможности</Nav.Link>
            <Nav.Link className="col-6" href="#pricing">Стоимость</Nav.Link>
            <Nav.Link className="col-6" href="#contacts">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavDropdown className="Flex-drop" title="RU" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              中文
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">日本語</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Deutsch
              </NavDropdown.Item>
            </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;