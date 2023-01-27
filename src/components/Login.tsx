import axios from "axios";
import Github from "./Github";

const Login = () => {

    return(
        <>
            <h2>로그인 화면</h2>
            <form>
                <input type="text" name={"id"}/>
                <input type="password" name={"pw"}/>
                <button type={"submit"}>로그인</button>
            </form>
            <Github/>{/* axios 테스트 */}
        </>
    )
}
export default Login;