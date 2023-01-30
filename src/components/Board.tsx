import {Container, Pagination, Table} from "react-bootstrap";

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

    return(
        <>


            <Container fluid={"md"}>
                <h2>게시판 화면</h2>
                {/*<Row>*/}
                {/*    <Col xs={8} sm={8}>게시물 제목</Col>*/}
                {/*    <Col xs={4} sm={4} style={{textAlign:'right'}}>2023.01.29</Col>*/}
                {/*</Row>*/}

                {/* 게시물 내용 */}
                <Table striped bordered hover>
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