import { useQuery,gql } from "@apollo/client";
import { useRouter } from "next/router"


const FETCH_PRODUCT = gql`
    query fetchProduct( $productId : ID ){
        fetchProduct (productId : $productId){
            seller
            name
            detail
            price
        }
    }
`


export default function DynamicProductReadPage(){
    
    
    const router = useRouter();

    const { data } = useQuery( FETCH_PRODUCT , {
        variables : { productId : router.query.myId }
    });


    return(
        <>

            <div>나의 상품 ID : {router.query.myId}</div>
            <div>판매자 :  {data && data.fetchProduct.seller}</div>
            <div>상품명 :  {data ? data.fetchProduct.name : ""}</div>
            <div>상품내용 : {data?.fetchProduct.detail}</div>
            <div>상품가격 : {data?.fetchProduct.price}</div>

        </>
    )
}