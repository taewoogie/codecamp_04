import {useRouter} from 'next/router'

export default function StaticRoutingPage(){

    
    const router = useRouter();

    const onClickRouter = () => {
        router.push('/05-02-static-routed')
    }


    return(
            <button onClick={onClickRouter}>이동하기</button>
    )
}