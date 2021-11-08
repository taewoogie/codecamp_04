import {useRouter} from 'next/router'
import Presenter from '../06-03-routing-presenter'

export default function Container(){

    const router = useRouter();

    const onClickRouter = () => {
        router.push('/quiz/06-04-routed-main/1')
    }
    const onClickRouter2 = () => {
        router.push('/quiz/06-04-routed-main/2')
    }
    const onClickRouter3 = () => {
        router.push('/quiz/06-04-routed-main/3')
    }
    return(
        <Presenter onClickRouter  = {onClickRouter}
                   onClickRouter2 = {onClickRouter2}
                   onClickRouter3 = {onClickRouter3}
        />
    )

}