# Code Beacon Lab Dev Community Project

> **Code Beacon Lab** 스터디에서 진행하는 **Front-End** 프로젝트입니다.
> <br/>[Main Repository](https://github.com/code-beacon-lab/cbl-bis-fe)

<br/>

## 실행 환경
- **`Node`  16.16.0**
- **`npm`  9.2.0**
<br/><br/>

###### 실행 전 설치
```shell
npm install
```

<br/>

###### 실행 방법
```shell
npm run start
```
<br/>

## 개발 환경
| **name**          | **version** | **memo**                    |
|:------------------|:------------|:----------------------------|
| `WebStorm`        | 2022.3.1    |                             |
| `typescript`      | 4.9.4       |                             |
| `React`           | 18.2.0      |                             |
| `Redux`           | 4.2.0       |                             |
| `React-redux`     | 8.0.5       |                             |
| `Redux-toolkit`   | 1.9.1       |                             |
| `Redux-logger`    | 3.0.6       |                             |
| `Router-dom`      | 6.7.0       |                             |
| `Axios`           | 1.2.4       |                             |
| `Bootstrap`       | 5.2.3       |                             |
| `React-Bootstrap` | 2.7.0       |                             |
| `styled-component`| 5.3.6       |                             |


## 피드백
### 프론트 부분
  - 타입스크립트 + 리덕스 툴킷를 사용하려면
    - [ ] store.ts 설징, hooks.ts 설정이 필수
    - [ ] 공식 문서 참고 : https://redux-toolkit.js.org/tutorials/quick-start
  - 리덕스 툴킷
    - 동기 설정 => 리덕스 툴킷 bulit-in 함수 
  - mock data 사용 시 -> JSON Server 검토
  - 로그인 토큰
    - 액세스 가지고 있고, 리프레시를 http only cookie로 처리
  - 뒤로가기 방지 처리
    - react router dom -> use navigate?
    - history를 조정하는 기능 
  - store에 있는 값을 접근할때  useAppSelector(타입스크립트를 쓰기 때문에 이걸 사용)
  
### CSS 부분
  - 피그마, 부트스트랩(커스텀이 불편할 수 있음)
  - 
