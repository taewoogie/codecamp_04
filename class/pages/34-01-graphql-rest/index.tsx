import axios from "axios";

const GraphqlRestPage = () => {
  const onClickSubmit = async () => {
    // axios.post("uri" , {data} , {headers: {}}) header 정보가 필요할 때 3번째 인자값에 헤더 정보를 넣어준다.
    const result = await axios.post(
      "https://backend04.codebootcamp.co.kr/graphql",
      {
        //  data 영역
        query: `
                mutation createBoard { 
                    createBoard ( 
                        createBoardInput : { 
                            writer : "우기" ,
                            password: "1234" ,
                            title : "2행시" ,
                            contents : "코: 코~ 자고 일어났더니 캠: 캠캠한 어두운 밤 강의실에 있네"
                        }
                    ){
                        _id
                        writer
                    }
                }
            `,
      }
    );
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
};
export default GraphqlRestPage;
