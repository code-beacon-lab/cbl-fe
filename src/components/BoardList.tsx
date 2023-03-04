import { Container, Pagination, Row} from "react-bootstrap";
import BoardBlock from "./BoardBlock";
import {useAppDispatch, useAppSelector} from "../Redux/hooks";

const BoardList = () => {
    /**
     * @Comment 게시물 받아오기(Redux)
     * */
    const dispatch = useAppDispatch();
    const boards = useAppSelector((state) => state.boards.boards);
    const isLoading = useAppSelector((state) => state.boards.isLoading);

    /**
    * @Comment 페이징 처리
    * */
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <>
            {isLoading && <div>Loading...</div>}
            <Container fluid={"sm"}>
                <h2 style={{borderBottom:'1px solid #D2D4D9', paddingBlock: '5px', textAlign: 'left'}}>게시판 화면</h2>
                {/*<Button onClick={getBoardList}>호출</Button>*/}

                {/* 게시물 내용 */}
                {
                    boards.map((board) =>
                        <BoardBlock
                            key={board.boardNo}    /* Key는 필수 */
                            board={board}           /* 받아온 게시물 리스트 반복 */
                        />
                    )
                }

                {/* 페이징 버튼 */}
                <Row>
                    <Pagination style={{marginTop: '30px', justifyContent: 'center', alignItems: 'center'}}>
                        <Pagination.First />
                        <Pagination.Prev />
                        {items}
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Row>
            </Container>
        </>
    )
}

// Axios 테스트 (CBI-API 첫 통신)

export default BoardList;
