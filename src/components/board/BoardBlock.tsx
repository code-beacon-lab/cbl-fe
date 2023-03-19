import {Col, Row} from "react-bootstrap";
import {CSSProperties} from "react";
import {Board} from "../../Redux/Slices/boardSlice";

const BoardBlock = ({board}:{board: Board}) => {
    return (
        <Row style={{ margin: '0 auto'}}>
            <Col style={boardList}>
                <Row style={boardblockStyle.rowStyle}>{/* 보더블록 상단 : 작성자, 조회수, 작성일 표시 */}
                    <Col sm={10} style={{ textAlign: 'left'}}>
                        <span>{board.boardNo}</span>
                        <span style={boardblockStyle.writer}>
                            작성자 : {board.boardComment}
                        </span>
                        <span>✨920</span>
                    </Col>

                    <Col sm={2} style={{}}>2023.01.28</Col>
                </Row>

                <Row style={boardblockStyle.rowStyle}>{/* 보더블록 중단 : 게시물 제목 표시 */}
                    <Col sm={8} style={{ paddingBottom: '10px', textAlign: 'left'}}>
                        <a href={"#"} style={boardblockStyle.title}>
                            {board.boardTitle}
                        </a>
                    </Col>
                    <Col sm={4}>
                        {board.boardContent}
                    </Col>
                </Row>


                <div style={boardblockStyle.bottom}>{/* 보더블록 하단 : 태그 내용들 */}
                    <span style={tagStyle}>React</span>
                    <span style={tagStyle}>Javascript</span>
                </div>
            </Col>
        </Row>
    )
}

/********** 컴포넌트 스타일 ***********/

/**
 * @comment 보더 리스트 블록 전체 스타일
 * */
const boardList: CSSProperties = {
    padding:'10px 20px',
    borderRadius: '5px',
    marginTop: '20px',
    boxSizing:'border-box',
    boxShadow: '3px 3px 10px'
}

/**
 * @comment 태그 외부(전체) 스타일
 * */
const tagStyle: CSSProperties = {
    borderRadius: '5px',
    backgroundColor: '#F0F6FA',
    color: '#5D93F9',
    fontSize: '12px',
    textAlign: 'center',
    padding: '5px 10px',
    marginRight: '10px'
}

/**
 * @comment 블록 내부 스타일 모음
 * */
const boardblockStyle = {
    /*@ 블록끼리의 상하 간격 */
    rowStyle: {
        margin: '10px 0'
    } as React.CSSProperties
    ,
    /*@ 블록 상단(작성자, 조회수, 작성일) */
    top: {
        textAlign: 'left'
    } as React.CSSProperties
    ,
    /*@ 블록 중단(게시글 제목) */
    mid: {

    } as React.CSSProperties
    ,
    /*@ 블록 하단(태그 부분) */
    bottom: {
        textAlign: 'left'
    } as React.CSSProperties
    ,
    /*@ 게시글 제목 스타일 */
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        color:'#333',
        textDecoration: 'none'
    } as React.CSSProperties
    ,
    /*@ 작성자 스타일 */
    writer: {
        fontSize: '16px',
        fontWeight: '600',
        marginRight: '10px',

    } as React.CSSProperties
    ,
    /*@ 작성일 */
    created: {
        fontSize: '12px',
        color:'#999',
    } as React.CSSProperties


}

export default BoardBlock;
