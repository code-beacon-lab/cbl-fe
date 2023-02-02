import {Col, Container, Pagination, Row, Table} from "react-bootstrap";
import {CSSProperties} from "react";

const Board = () => {

    // 페이징 처리
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const boardList: CSSProperties = {
        padding:'10px 20px',
        // height: '50px',
        // backgroundColor:'skyblue',
        borderTop:'1px solid #D2D4D9',
        borderBottom:'1px solid #D2D4D9',
        boxSizing:'border-box',
        // justifyContent: 'space-between'
    }

    const tagStyle: CSSProperties = {
        borderRadius: '10px',
        backgroundColor: '#F0F6FA',
        color: '#5D93F9',
        textAlign: 'center',
        padding: '0 10px',
        backgroundClip: 'content-box'
    }

    const rowStyle: CSSProperties = {
        margin: '20px 0'
    }



    return(
        <>


            <Container fluid={"sm"} style={{width:'900px'}}>
                <h2>게시판 화면</h2>

                {/* 게시물 내용 */}
                {/*<Container style={{width: '100%', height:'200px', backgroundColor:'blue'}}>*/}
                <Row>
                    <Col style={boardList}>
                        <Row style={rowStyle}>{/* 작성자, 조회수, 작성일 표시 */}
                            <Col sm={2}>작성자</Col>
                            <Col sm={2}>920</Col>
                            <Col sm={4}></Col>
                            <Col sm={4} style={{textAlign:'right'}}>2023.01.28</Col>
                        </Row>

                        <Row style={rowStyle}>{/* 게시물 제목 표시 */}
                            <Col sm={8}><a href={"#"}>게시물 제목</a></Col>
                            <Col sm={4}></Col>
                        </Row>


                        <Row style={rowStyle}>{/* 태그 내용들 */}
                            <Col sm={2} style={tagStyle}>Javascript</Col>
                            <Col sm={2} style={tagStyle}>React</Col>
                        </Row>
                    </Col>
                </Row>

                {/*</Container>*/}


                {/* 테스트 테이블 */}
                <Table striped bordered hover style={{marginTop: '300px'}}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>

                {/* 페이징 버튼 */}
                <Pagination style={{float:'right'}}>
                    <Pagination.First />
                    <Pagination.Prev />
                    {items}
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>


            </Container>
        </>
    )
}
export default Board;