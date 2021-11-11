import { useMutation }                    from '@apollo/client'
import { ChangeEvent, useState }          from 'react'
import { useRouter }                      from 'next/router'
import { CRERATE_BOARD , UPDATE_BOARD }   from './BoardWrite.Queries'
import BoardWritePresenter                from './BoardWrite.Presenter'


interface IProps {
    isEdit          : boolean,
    fetchBoardData? : any
}

export default function BoardWriteContainer(props : IProps){
    const router                       = useRouter();
    const [createBoard]                = useMutation(CRERATE_BOARD)
    const [updateBoard]                = useMutation(UPDATE_BOARD)
    const [Writer     , setWriter]     = useState("")
    const [Title      , setTitle]      = useState("")
    const [Contents   , setContents]   = useState("")
    const [BackGround , setBackGround] = useState<boolean>(false)

                            // 이벤트 change 이벤트이며 <htmlinputelement> 의 value를 할당했다
    const onChangeWriter = (event : ChangeEvent<HTMLInputElement>) => {
        const chkWriter = event.target.value;
        setWriter(chkWriter);
        onChangeBackGround(chkWriter,Title, Contents);
    }

    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) => {
        const chkTitle = event.target.value;
        setTitle(chkTitle);
        onChangeBackGround(Writer,chkTitle,Contents);
    }

    const onChangeContents = (event : ChangeEvent<HTMLInputElement>) => {
        const chkContents = event.target.value;
        setContents(chkContents);
        onChangeBackGround(Writer,Title,chkContents);
    }

    const onChangeBackGround = (chkWriter:string | number , chkTitle:string|number , chkContents:string|number) => {

        if(chkWriter !== '' && chkTitle !== '' && chkContents !== '') {
            setBackGround(true);
        } else {
            setBackGround(false);
        }
    }

    // 등록하기
    const Request = async () => {
        // alert("등록하기 버튼을 누르셨습니다");
        const result = await createBoard({
            variables : {
                writer    : Writer,
                title     : Title,
                contents  : Contents
            }
        });
        console.log(result);
        console.log(result.data.createBoard.message);
        alert('등록이 완료 되었습니다')
        console.log(result.data.createBoard.number);
        router.push(`/09-02-boards2/${result.data.createBoard.number}`);
    }

    // 수정하기
    const Edit = async () => {
        interface IMyVariables {
            number?   : number ,
            writer?   : string | number ,
            title?    : string | number ,
            contents? : string | number 
        }

        // 수정 페이지에서 작성한 항목을 확인 할 배열 생성
        // 필수값인 number(게시물번호) 고정
        const myVariables: IMyVariables = { 
            number : Number(router.query.number) 
            
        }

        // 항목 중 값이 있을 때만 myVariables 객체 안에 푸쉬 해준다.
        if(Writer !== "") myVariables.writer = Writer
        if(Title !== "") myVariables.title = Title
        if(Contents !== "") myVariables.contents = Contents

        const result = await updateBoard({
            variables : myVariables
        })
        alert("수정이 완료 되었습니다");
        console.log(result)
        router.push(`/09-02-boards2/${router.query.number}`);
    }

    return(
        <BoardWritePresenter onChangeWriter       = { onChangeWriter }
                             onChangeTitle        = { onChangeTitle }
                             onChangeContents     = { onChangeContents }
                             BackGround           = { BackGround }
                             Request              = { Request }
                             isEdit               = { props.isEdit }
                             Edit                 = { Edit }
                             fetchBoardData       = { props.fetchBoardData }
        />
    )
}