import { ChangeEvent } from 'react'
import { MyInput , MyButton } from './BoardWrite.Styles' 

interface IProps {
    // void : return 이 없는 함수
    onChangeWriter     : ( event : ChangeEvent<HTMLInputElement> ) => void
    onChangeTitle      : ( event : ChangeEvent<HTMLInputElement> ) => void
    onChangeContents   : ( event : ChangeEvent<HTMLInputElement> ) => void
    Request            : () => void
    Edit               : () => void
    isEdit             : boolean
    BackGround         : boolean
    fetchBoardData?    : any
}
export default function BoardWritePresenter(props : IProps){

    return(
        <>
            작성자 : <MyInput type="text" onChange={props.onChangeWriter} 
                                        defaultValue={props.fetchBoardData?.fetchBoard.writer}/> <br />

            제목 :  <MyInput type="text" onChange={props.onChangeTitle}
                                        defaultValue={props.fetchBoardData?.fetchBoard.title}/> <br />

            내용 :  <MyInput type="text" onChange={props.onChangeContents} 
                                        defaultValue={props.fetchBoardData?.fetchBoard.contents}/> <br />
            
            {!props.isEdit && <MyButton onClick={props.Request} BackGround={props.BackGround}> 게시물 {props.isEdit?"수정":"등록"}하기 </MyButton> }
            { props.isEdit && <MyButton onClick={props.Edit}    BackGround={props.BackGround}> 게시물 {props.isEdit?"수정":"등록"}하기 </MyButton> }
        </>
        
    )
}