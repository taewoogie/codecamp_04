import { useRouter } from "next/router"


export default function DynamicRountedNumberPage(){
    const router = useRouter();


    console.log(router);
    // console.log(router.query);





    return(
            <div>{router.query.routed} 번 Dynamic 이동완료!</div>
        )
}