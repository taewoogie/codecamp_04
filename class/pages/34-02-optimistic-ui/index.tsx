import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      likeCount
      dislikeCount
      youtubeUrl
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

const OptimisticUiPage = () => {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: "61baaee6717be5002baa7554" } }
  );
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const onClickOptimisticUi = () => {
    // 너무좋아완전좋아요 증가시키는 mutation
    likeBoard({
      variables: { boardId: "61baaee6717be5002baa7554" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "61baaee6717be5002baa7554" },
      //     },
      //   ], // refetch 할 때 까지 기다려야 함
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "61baaee6717be5002baa7554" },
          data: {
            fetchBoard: {
              _id: "61baaee6717be5002baa7554",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>너무좋아완전좋아요 갯수 : {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUi}>
        너무좋아완전좋아요 카운트 2 올리기 전에 1 먼저 올리고 2를 뺀 후 1을 다시
        올리자
      </button>
    </>
  );
};
export default OptimisticUiPage;
