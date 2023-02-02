import {Col, Row} from "react-bootstrap";
import {CSSProperties} from "react";

/**
 * @comment 보더 리스트 블록 전체 스타일
 * */
const boardList: CSSProperties = {
    padding:'10px 20px',
    // height: '50px',
    // backgroundColor:'skyblue',
    // borderTop:'1px solid #D2D4D9',
    // borderBottom:'1px solid #D2D4D9',
    borderRadius: '5px',
    marginTop: '20px',
    boxSizing:'border-box',
    boxShadow: '3px 3px 10px'
    // justifyContent: 'space-between'
}

/**
 * @comment 태그 블록 스타일
 * */
const tagStyle: CSSProperties = {
    borderRadius: '5px',
    backgroundColor: '#F0F6FA',
    color: '#5D93F9',
    fontSize: '12px',
    textAlign: 'center',
    padding: '5px 10px',
    marginRight: '10px'
    // backgroundClip: 'content-box'
}

/**
 * @comment 블록안 간격 스타일
 * */
const rowStyle: CSSProperties = {
    margin: '10px 0'
}
const BoardBlock = () => {
    return(
    <Row style={{width:'870px', margin: '0 auto'}}>
        <Col style={boardList}>
            <Row style={rowStyle}>{/* 작성자, 조회수, 작성일 표시 */}
                <Col sm={2}>작성자</Col>
                <Col sm={2}>✨920</Col>
                <Col sm={4}></Col>
                <Col sm={4} style={{textAlign:'right'}}>2023.01.28</Col>
            </Row>

            <Row style={rowStyle}>{/* 게시물 제목 표시 */}
                <Col sm={8} style={{ paddingBottom: '10px' }}><a href={"#"} style={{fontSize: '20px', fontWeight: 'bold', color:'#333', textDecoration: 'none'}}>게시물 제목</a></Col>
                <Col sm={4}></Col>
            </Row>

            {/* 태그 내용들 */}
            <span style={tagStyle}>React</span>
            <span style={tagStyle}>Javascript</span>
        </Col>
    </Row>
    )
}
export default BoardBlock;