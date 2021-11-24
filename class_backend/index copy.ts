import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./mysql/Board";

const typeDefs = gql`
  input CreateBoardInput {
    writer: String!
    title: String!
    contents: String!
    likeCount: Int
    dislikeCount: Int
  }

  type Board {
    number: Int
    writer: String
    title: String
    contents: String
    likeCount: Int
    dislikeCount: Int
  }

  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    # 주석처리 createBoard(writer: String , title: String, contents: String, likeCount: Int, dislikeCount: Int): String
    createBoard(createBoardInput: CreateBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에서 게시물 데이터 꺼내오기
      const result = await Board.find({ where: { deletedAt: false } });
      console.log(result);
      return result;
    },
  },

  Mutation: {
    deleteBoard: async (_: any, args: any) => {
      await Board.update({ number: args.number }, { deletedAt: new Date() });

      return "게시물이 정상정으로 삭제되었습니다.";
    },

    createBoard: async (_: any, args: any) => {
      // 데이터베이스에 게시물 데이터 등록하기
      await Board.insert({
        ...args.createBoardInput,
      });

      return "게시물 등록에 성공하였습니다.";
    },
  },
};

const apollo_server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3315,
  // @ts-ignore
  entities: [__dirname + "/mysql/*.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    //   연결 성공 시 실행하기
    console.log("연결완료");

    apollo_server.listen({ port: 4000 });
  })
  .catch((error) => {
    //   연결 실패 시 실행하기
    console.log(error);
  });
