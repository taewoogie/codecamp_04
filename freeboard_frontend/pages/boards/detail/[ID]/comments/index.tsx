import BoardDetailContainer      from '../../../../../src/components/units/board/detail/BoardDetail.Container';
import { FETCH_BOARD_COMMENTS } from '../../../../../src/components/units/board/comments/BoardComments.Queries';
import { useRouter }            from 'next/router';
import { useQuery }             from '@apollo/client';

export default function CommentsPage(){
    
        // 페이지 이동 기능
        const router = useRouter();
        // 게시글 상세 조회
        const { data } = useQuery( FETCH_BOARD_COMMENTS , { variables : { boardId : router.query.ID }});
    
    return(
        <BoardDetailContainer fetchBoardComments = { data }
        />
    )
}