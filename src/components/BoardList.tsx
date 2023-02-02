import {Container, Pagination, Table} from "react-bootstrap";
import BoardBlock from "./BoardBlock";

const BoardList = () => {

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
            <Container fluid={"sm"} style={{width:'900px'}}>
                <h2 style={{borderBottom:'1px solid #D2D4D9', paddingBlock: '5px'}}>게시판 화면</h2>

                {/* 게시물 내용 */}
                <BoardBlock/>
                <BoardBlock/>
                <BoardBlock/>
                <BoardBlock/>
                <BoardBlock/>
                <BoardBlock/>

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

export default BoardList;