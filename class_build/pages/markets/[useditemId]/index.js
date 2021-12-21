import Head from "next/head";
import { request, gql } from "graphql-request";

const MarketsPage = (props) => {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        {/* <meta property="og:url" content="http://taewoogie.site" /> */}
        <meta property="og:image" content={props.fetchUseditem.images[0]} />
        <meta property="description" content={props.fetchUseditem.remarks} />
      </Head>
      <div>안녕하세요, 상품 페이지입니다.</div>
    </>
  );
};
export default MarketsPage;

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

// pages 폴더에 getServerSideProps가 있으면 ssr 을 해줘야겠구나 하고 인식함
export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend04.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    { useditemId: context.query.useditemId }
  );

  return {
    props: {
      fetchUseditem: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images[0],
      },
    },
  };
};
