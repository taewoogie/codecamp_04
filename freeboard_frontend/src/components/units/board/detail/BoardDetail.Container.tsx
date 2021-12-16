import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

const BoardDetail = () => {
  const router = useRouter();
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.boardId) } }
  );
  // console.log("<<<<<< Detail Container >>>>>>>");
  console.log(data);

  const onClickMoveToList = () => {
    router.push("/boards");
  };

  const onClickMoveToUpdate = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      alert("게시물이 삭제되었습니다.");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
          data: {
            fetchBoard: {
              _id: String(router.query.boardId),
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
    // likeBoard({
    //   variables: { boardId: String(router.query.boardId) },
    //   refetchQueries: [
    //     { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
    //   ],
    // });
  };

  const onClickDislike = () => {
    dislikeBoard(
      {
        variables: { boardId: String(router.query.boardId) },
        optimisticResponse: {
          dislikeBoard: (data?.fetchBoard.dislikeCount || 0) + 1,
        },
        update(cache, { data }) {
          cache.writeQuery({
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
            data: {
              fetchBoard: {
                _id: String(router.query.boardId),
                __typename: "Board",
                dislikeCount: data?.dislikeBoard,
              },
            },
          });
        },
      }
      // dislikeBoard({
      //   variables: { boardId: String(router.query.boardId) },
      //   refetchQueries: [
      //     { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      //   ],
      // });
    );
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
};
export default BoardDetail;
