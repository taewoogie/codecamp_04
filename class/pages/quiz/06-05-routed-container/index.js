import { useRouter } from 'next/router'
import RoutedPresenter from '../06-06-routed-presenter'

export default function RoutedContainer(){
    const router = useRouter();

    console.log(router);

    return(
        <RoutedPresenter routed = {router.query.routed}

         />
    )
}