import {Col, Container, Pagination, Row} from "react-bootstrap";
import BoardBlock from "./BoardBlock";
import {Board} from "../Redux/Slices/board";
import {useDispatch, useSelector} from "react-redux";
import {ReducerType} from "../Redux/rootReducer";
import {useState} from "react";

const BoardList = () => {

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

    /**
     * @Comment 게시물 받아오기(Redux)
     * */

    const board = useSelector<ReducerType, Board[]>(state => state.board);
    const dispatch = useDispatch();

    const [ getBoard, setBoard ] = useState('');

    return(
        <>
            <Container fluid={"sm"}>
                <h2 style={{borderBottom:'1px solid #D2D4D9', paddingBlock: '5px', textAlign: 'left'}}>게시판 화면</h2>

                {/* 게시물 내용 */}
                {
                    board.map( board =>
                        <BoardBlock
                            key={board.board_no}    /* Key는 필수 */
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

export default BoardList;