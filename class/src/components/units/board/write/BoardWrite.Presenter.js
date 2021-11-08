import { MyInput , MyButton } from './BoardWrite.Styles' 

export default function BoardWritePresenter(props){

    return(
        <>
            작성자 : <MyInput type="text" onChange={props.onChangeWriter} /> <br />
            제목 :  <MyInput type="text" onChange={props.onChangeTitle} /> <br />
            내용 :  <MyInput type="text" onChange={props.onChangeContents} /> <br />
            <MyButton onClick={props.Request} BackGround={props.BackGround} >게시물 등록하기</MyButton>
        </>
        
    )
}