import Head from "next/head";
const BoardsPage = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="WoogieSite" />
        <meta property="og:url" content="http://taewoogie.site" />
        <meta
          property="og:image"
          content="https://lovecoco.co.kr/web/product/big/20191128/6cd48ed7156b799d13a263e3e189ef1f.jpg"
        />
        <meta
          property="description"
          content="Taewoogie와 비숑의 댕댕미를 느껴보세요"
        />
      </Head>
      <div>안녕하세요, 게시판입니다.</div>
      <img
        src="/KakaoTalk_Photo_2021-12-21-11-21-04.jpeg"
        alt="Woogie Picture"
        width={300}
        height={300}
      />
    </>
  );
};
export default BoardsPage;
