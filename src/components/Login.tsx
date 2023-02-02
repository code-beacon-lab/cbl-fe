import Github from "./Github";
import {Button, Container, Form} from "react-bootstrap";
import React from "react";

const Login = () => {

    return(
        <>
            <Container fluid={"sm"} style={{width:'500px'}}>
                <h2>로그인 화면</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="email" placeholder="ID" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>PW</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Github/>{/* axios 테스트 */}
            </Container>
        </>
    )
}
export default Login;