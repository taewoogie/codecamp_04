import BoardWriteContainer from '../../../../../src/components/units/board/write/BoardWrite.Container';
import { FETCH_BOARD }     from '../../../../../src/components/units/board/detail/BoardDetail.Queries';
import { useRouter }       from 'next/router';
import { useQuery }        from '@apollo/client';

export default function EditPage(){
    
        // 페이지 이동 기능
        const router = useRouter();
        // 게시글 상세 조회
        const { data } = useQuery( FETCH_BOARD , { variables : { boardId : router.query.ID }});
    
    return(
        <BoardWriteContainer isEdit         = { true } 
                             fetchBoardData = { data }
        />
    )
}