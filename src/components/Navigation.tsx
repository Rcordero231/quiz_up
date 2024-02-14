import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

type NavigationProps = {
    isLoggedIn: boolean,
    handleClick: () => void
}

export default function Navigation({ isLoggedIn, handleClick }: NavigationProps) {
    // console.log(isLoggedIn);
    return (
        <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Quiz-Up</Navbar.Brand>
                <Navbar.Toggle aria-controls='nav-collapse' />
                <Navbar.Collapse id="nav-collapse">
                    <Nav className='me-auto'>
                        { isLoggedIn ? (
                            <>
                                <Nav.Link href='/'>Create Quiz</Nav.Link>
                                <Nav.Link as={Link} to='/' onClick={handleClick}>Log Out</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                                <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}