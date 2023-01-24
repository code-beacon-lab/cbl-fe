import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    const logo = require("../images/logo192.png");
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

    return (
        <nav className={"nav"}>
            {/* 로고 및 메인화면 라우터 */}
            <div className={"nav-logo"}>
                <Link to={"/"}>
                    <img src={logo} alt={"logo"}/>
                </Link>
            </div>

            {/* 게시판 라우터 */}
            <div className={"nav-board"}>
                <Link to={"/board"}>게시판</Link>
            </div>

            {/* 로그인시 or 비로그인시 */}
            {!isLoggedIn? (
                <div className={"nav-login"}>
                    <Link to={"/login"} className={"login-button"}>
                        로그인
                    </Link>
                </div>
            ) : (
                <>
                    <div className={"nav-user"}>
                        <Link to={"/mypage"} className={"nav-mypage"}>
                            마이페이지
                        </Link>
                    </div>
                    <button className={"logout-button"}>로그아웃</button>
                </>
            )}
        </nav>
    )
}
export default Navigation;