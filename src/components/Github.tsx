import axios from 'axios';
import {GithubProfile} from "../types/GithubProfile";
// axios 테스트
const Github = () => {

    // @ts-ignore
    return (
        <>
            <button onClick={getUserProfile}>호출</button>
        </>
    )
}

// export async function getUserProfile(username: string) {
// export async function getUserProfile() {
//     // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
//     const response = await axios.get<GithubProfile>(
//         `https://api.github.com/users/ByeonSeongUk`
//     );
//     console.log(response.data);
//     return response.data; // 데이터 값을 바로 반환하도록 처리
// }

const getUserProfile = async() => {
    // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
    const response = await axios.get<GithubProfile>(
        `https://api.github.com/users/ByeonSeongUk`
    );
    console.log(response.data);
    return response.data; // 데이터 값을 바로 반환하도록 처리
}


export default Github;