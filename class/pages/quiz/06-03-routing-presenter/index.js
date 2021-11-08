export default function Presenter(props){
    return(
        <>
            <button onClick={props.onClickRouter}>1번 게시글로 이동하기</button>
            <button onClick={props.onClickRouter2}>2번 게시글로 이동하기</button>
            <button onClick={props.onClickRouter3}>3번 게시글로 이동하기</button>
        </>
    )
}