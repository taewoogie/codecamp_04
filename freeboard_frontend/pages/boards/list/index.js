import { useQuery , gql } from "@apollo/client"
import { useRouter }      from 'next/router'
import styled             from '@emotion/styled'

// Query
const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            _id
            writer
            title
            contents
            createdAt

        }
    }
`;

const FETCH_BOARDS_OF_THE_BEST = gql`
query {
    fetchBoardsOfTheBest{
        _id
        writer
        title
        contents
        likeCount
        createdAt
    }
  }
`;

// Styled
const Row = styled.div`
    display: flex;
`
// 컬럼명 헤더
const ColumnHeader = styled.div`
    width: 15%;
    text-align: center;
    border: 1px solid tomato;
`
// 컬럼
const Column = styled.span`
    width: 15%;
    border: 1px solid turquoise;
`
// 체크박스 헤더
const ColumnChkBoxHeader = styled.div`
    width: 50px;
    height : 50px;
    border: 1px solid tomato;
    display: flex;
    justify-content: center;
    align-items: center;
`
// 체크박스
const ColumnChkBox = styled.div`
    width: 50px;
    height : 50px;
    border: 1px solid turquoise;
    display: flex;
    justify-content: center;
    align-items: center;
`
// 번호 헤더
const ColumnIndexHeader = styled.div`
    width: 100px;
    height : 50px;
    border: 1px solid tomato;
    display: flex;
    justify-content: center;
    align-items: center;
`
// 번호
const ColumnIndex = styled.div`
    width: 100px;
    height : 50px;
    border: 1px solid turquoise;
    display: flex;
    justify-content: center;
    align-items: center;
`
// 제목 헤더
const ColumnTitleHeader = styled.div`
    width: 900px;
    height : 50px;
    border: 1px solid tomato;
    display: flex;
    justify-content: center;
    align-items: center;
`
// 제목
const ColumnTitle = styled.div`
    width: 900px;
    height : 50px;
    border: 1px solid turquoise;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
// 작성자 헤더
const ColumnWriterHeader = styled.div`
    width: 200px;
    height : 50px;
    border: 1px solid tomato;
    display: flex;
    justify-content: center;
    align-items: center;
`
// 작성자
const ColumnWriter = styled.div`
    width: 200px;
    height : 50px;
    border: 1px solid turquoise;
    display: flex;
    justify-content: center;
    align-items: center;
`
// 날짜 헤더
const ColumnCreatedAtHeader = styled.div`
    width: 150px;
    height : 50px;
    border: 1px solid tomato;
    display: flex;
    justify-content: center;
    align-items: center;
`
// 날짜
const ColumnCreatedAt = styled.div`
    width: 150px;
    height : 50px;
    border:  1px solid turquoise;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function DetailListPage(){
    
    const router = useRouter();
    
    // 베스트 게시물 조회
    const { data:ad } = useQuery(FETCH_BOARDS_OF_THE_BEST);
    // 전체 게시글 리스트 조회
    const { data:ad2 } = useQuery(FETCH_BOARDS);
    
    const onClickColumnTitle = (event) => {
        // alert('타이틀');
        event.target.id
        // 상세 페이지로 이동
        router.push(`/boards/detail/${event.target.id}`);

    }
    
    return(
        <div>
            <div>
                <Row>
                    <ColumnChkBoxHeader><input type="checkbox"/></ColumnChkBoxHeader>
                    <ColumnIndexHeader>순번</ColumnIndexHeader>
                    <ColumnHeader>작성자</ColumnHeader>
                    <ColumnHeader>제목</ColumnHeader>
                    <ColumnHeader>내용</ColumnHeader>
                    <ColumnHeader>좋아요</ColumnHeader>
                    <ColumnHeader>싫어요</ColumnHeader>
                </Row>

                {ad?.fetchBoardsOfTheBest.map((el,index) => (
                <Row>
                    <ColumnChkBox><input type="checkbox" key={el._id}/></ColumnChkBox>
                    <ColumnIndex>{index + 1}</ColumnIndex>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.contents}</Column>
                    <Column>{el.likeCount}</Column>
                    <Column>{el.dislikeCount}</Column>
                </Row>
                ))}
            </div>
            
            <br />
            <br />
            <br />
            
            <div>
                <Row>
                    <ColumnChkBoxHeader><input type="checkbox" /></ColumnChkBoxHeader>
                    <ColumnIndexHeader>순번</ColumnIndexHeader>
                    <ColumnTitleHeader>제목</ColumnTitleHeader>
                    <ColumnWriterHeader>작성자</ColumnWriterHeader>
                    <ColumnCreatedAtHeader>날짜</ColumnCreatedAtHeader>
                </Row>

                {ad2?.fetchBoards.map((el , index) =>  (
                <Row>
                    <ColumnChkBox><input type="checkbox" key={el._id}/></ColumnChkBox>
                    <ColumnIndex>{index + 1}</ColumnIndex>
                    <ColumnTitle onClick={onClickColumnTitle} id={el._id}>{el.title}</ColumnTitle>
                    <ColumnWriter>{el.writer}</ColumnWriter>
                    <ColumnCreatedAt>{el.createdAt.replaceAll('-','.').split('T')[0]}</ColumnCreatedAt>
                </Row>
                ))}
            </div>
        </div>
    )
}