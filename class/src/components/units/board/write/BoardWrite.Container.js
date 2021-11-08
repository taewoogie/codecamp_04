import { useMutation }     from '@apollo/client'
import { useState }        from 'react'
import { CRERATE_BOARD }   from './BoardWrite.Queries'
import BoardWritePresenter from './BoardWrite.Presenter'

export default function BoardWriteContainer(){
   
    const [createBoard]                = useMutation(CRERATE_BOARD)
    const [Writer     , setWriter]     = useState("")
    const [Title      , setTitle]      = useState("")
    const [Contents   , setContents]   = useState("")
    const [BackGround , setBackGround] = useState(false)

    const onChangeWriter = (event) => {
        const chkWriter = event.target.value;
        setWriter(chkWriter);
        onChangeBackGround(chkWriter,Title, Contents);
        // if(event.target.value !== '' && Title !== '' && Contents !== '') {
        //     setBackGround(true);
        // } 
    }

    const onChangeTitle = (event) => {
        const chkTitle = event.target.value;
        setTitle(chkTitle);
        onChangeBackGround(Writer,chkTitle,Contents);
        // if(event.target.value !== '' && Writer !== '' && Contents !== '') {
        //     setBackGround(true);
        // } 
    }

    const onChangeContents = (event) => {
        const chkContents = event.target.value;
        setContents(chkContents);
        onChangeBackGround(Writer,Title,chkContents);
        // if(event.target.value !== '' && Writer !== '' && Title !== '') {
        //     setBackGround(true);
        // }
    }

    const onChangeBackGround = (chkWriter , chkTitle , chkContents) => {
        // console.log("1_BackGround : " + BackGround);

        // console.log('chkWriter : '   + chkWriter);
        // console.log('chkTitle : '    + chkTitle);
        // console.log('chkContents : ' + chkContents);

        if(chkWriter !== '' && chkTitle !== '' && chkContents !== '') {
            // console.log("2_BackGround : " + BackGround);
            setBackGround(true);
        } else {
            // console.log("3_BackGround : " + BackGround);
            setBackGround(false);
        }
    }

    // const onChangeBackGround = () => {
    //     if(Writer !== '' && Title !== '' && Contents !== '') {
    //         setBackGround(true)
    //     } else {
    //         setBackGround(false)
    //     }
    // }


    const Request = async () => {

        const result = await createBoard({
            variables : {
                writer    : Writer,
                title     : Title,
                contents  : Contents
            }
        });
        console.log(result);
        console.log(result.data.createBoard.message);
    }
    return(
        <BoardWritePresenter onChangeWriter       = { onChangeWriter }
                             onChangeTitle        = { onChangeTitle }
                             onChangeContents     = { onChangeContents }
                             BackGround           = { BackGround }
                             Request              = { Request }
        />

    )

}