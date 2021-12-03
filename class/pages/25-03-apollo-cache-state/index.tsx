import { useQuery, gql, useMutation } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => async () => {
    const result = await deleteBoard({
      variables: {
        boardId,
      },
      // refetchQueries: [] refetch를 통해 기존에 삭제 되지 않은 게시물을 조회 해 왔다.
      // 데이터가 캐시에 저장된 후에 들어오기 때문에 cache 를 호출을 함.
      // data는 deleteBoard  하고 난 후 res 데이터 이다.
      update(cache, { data }) {
        const deletedId = data.deleteBoard; // 삭제된 게시글 ID (플레이그라운드 확인!)

        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // 1. 기존의 fetchBoards 10개에서 , 방금 삭제한 ID 를 제외한 9개를 만들기
              // 2. 그렇게 만들어진 9개의 새로운 fetchBoards 데이터를 돌려주기
              const newFetchBoards = prev.filter(
                (el) => readField("_id", el) !== deletedId
              ); // 10개 el = 1개씩
              return [...newFetchBoards];
              // return 변화될 데이터 => fetchBoards
            },
          },
        });
      },
    });
  };

  const onClickSubmit = () => {
    // 등록하기
    createBoard({
      variables: {
        createBoardInput: {
          writer: "",
          password: "1234",
          title: "",
          contents: "♥️",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // 추가 된 createBoard 결과물과, 이전의 10개를 합쳐서 11개로 돌려주기
              return [data.createBoard, ...prev];
              // return 변경될 데이터 - fetchBoards
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
