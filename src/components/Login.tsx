import Github from "./Github";
import {Container} from "react-bootstrap";

const Login = () => {

    return(
        <>
            <Container fluid={"md"}>
                <h2>로그인 화면</h2>
                <form>
                    <input type="text" name={"id"}/>
                    <input type="password" name={"pw"}/>
                    <button type={"submit"}>로그인</button>
                </form>
                <Github/>{/* axios 테스트 */}
            </Container>
        </>
    )
}
export default Login;