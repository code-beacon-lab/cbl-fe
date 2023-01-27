import {useState} from 'react';
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";

const Navigation = () => {
    const logo = require("../images/logo192.png");
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

    return (

        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Main</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/board">Board</Nav.Link>
            </Nav.Item>


            {/* 로그인시 or 비로그인시 */}
            {!isLoggedIn? (
                <Nav.Item>
                    <Nav.Link eventKey="/login">Login</Nav.Link>
                </Nav.Item>
            ) : (

                <>
                    <Nav.Item>
                        <Nav.Link eventKey="/mypage">MyPage</Nav.Link>
                    </Nav.Item>
                    <button className={"logout-button"}>로그아웃</button>
                </>
            )}
        </Nav>

    )
}
export default Navigation;