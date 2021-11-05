import {useRouter} from 'next/router'

export default function StaticRoutingNumberPage(){

    
    const router = useRouter();

    const onClickRouter = () => {
        router.push('/05-04-static-routed-number/1')
    }
    const onClickRouter2 = () => {
        router.push('/05-04-static-routed-number/2')
    }
    const onClickRouter3 = () => {
        router.push('/05-04-static-routed-number/3')
    }


    return(
        <>
            <button onClick={onClickRouter}>1번 게시글로 이동하기</button>
            <button onClick={onClickRouter2}>2번 게시글로 이동하기</button>
            <button onClick={onClickRouter3}>3번 게시글로 이동하기</button>
        </>
    )
}