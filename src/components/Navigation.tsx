import {useState} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navigation = () => {
    const logo = require("../assets/images/logo.png");
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

    return (
        <>
            <Navbar bg="light" variant="light" fixed="top">
                <Container style={{width:'900px'}}>

                    {/* 로고 */}
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Code Beacon Lab
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    {/* NavBar 텍스트 버튼 */}
                    <Nav className={"me-auto"}>
                        <Nav.Link href="/board">Board</Nav.Link>
                        <Nav.Link href="/study">Study</Nav.Link>
                        <Nav.Link href="/community">Community</Nav.Link>
                    </Nav>

                    <Nav>

                        {/* 검색 폼 */}
                        {/*<Form className="d-flex">*/}
                        {/*    <Form.Control*/}
                        {/*        type="search"*/}
                        {/*        placeholder="Search"*/}
                        {/*        className="me-2"*/}
                        {/*        aria-label="Search"*/}
                        {/*    />*/}
                        {/*    <Button variant="outline-success">Search</Button>*/}
                        {/*</Form>*/}

                        {/* 로그인시 or 비로그인시*/}
                        {!isLoggedIn? (
                            <>
                                <Button variant="secondary" href={"/login"}>Login</Button>
                            </>

                        ) : (
                            <>
                                <Nav.Link eventKey="/mypage">MyPage</Nav.Link>
                                <Button variant="outline-secondary">Logout</Button>{' '}
                            </>
                        )
                        }

                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}
export default Navigation;