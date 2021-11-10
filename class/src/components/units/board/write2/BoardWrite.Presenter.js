import { MyInput , MyButton } from './BoardWrite.Styles' 

export default function BoardWritePresenter(props){

    return(
        <>
            작성자 : <MyInput type="text" onChange={props.onChangeWriter} /> <br />
            제목 :  <MyInput type="text" onChange={props.onChangeTitle} /> <br />
            내용 :  <MyInput type="text" onChange={props.onChangeContents} /> <br />
            
            {!props.isEdit && <MyButton onClick={props.Request} BackGround={props.BackGround} >게시물 {props.isEdit?"수정":"등록"}하기</MyButton>}
            {props.isEdit && <MyButton onClick={props.Edit} BackGround={props.BackGround} >게시물 {props.isEdit?"수정":"등록"}하기</MyButton>}
        </>
        
    )
}