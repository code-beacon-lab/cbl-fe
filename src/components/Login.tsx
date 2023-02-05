import Github from "./Github";
import {Button, Container, Form} from "react-bootstrap";
import React from "react";
import axios from "axios/index";
import {GithubProfile} from "../types/GithubProfile";

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
const loginTest = async() => {
    // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
    const response = await axios.post(
        `http://localhost:8080/api/setboard`
    );
    console.log(response.data);
    return response.data; // 데이터 값을 바로 반환하도록 처리
}
export default Login;