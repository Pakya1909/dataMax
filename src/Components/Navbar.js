import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => {
    return (
        <Navbar> 
            <Container fluid>
                <Navbar.Brand>DATA-MAX</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end me-2">
                    <Button className="me-3" variant="dark"> Deploy </Button>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Sign Up
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Login</Dropdown.Item>
                            <Dropdown.Item>Log Out</Dropdown.Item>
                            <Dropdown.Item>Setting</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;