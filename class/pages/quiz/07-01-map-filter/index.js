import { useMutation, useQuery, gql } from "@apollo/client"
import styled from "@emotion/styled"

const FETCH_PRODUCTS = gql`
    query {
        fetchProducts{
        seller
        name
        detail
        price
        createdAt
        _id
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct ($productId : ID) { 
        deleteProduct (productId : $productId) {
            _id
            number
            message
        }
    }
`

const Row = styled.div`
    display: flex;
    
`

const Column = styled.span`
    width: 15%;
`

export default function MapFilterPage(){

    const { data }        = useQuery(FETCH_PRODUCTS);
    const [deleteProduct] = useMutation(DELETE_PRODUCT);

    async function onClickDelete(event){
        try{
            await deleteProduct({
                variables : {productId : event.target.id , key : event.target.key},
                refetchQueries : [{ query : FETCH_PRODUCTS }]
            })
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <div>
            {data?.fetchProducts.map(( el , index ) => (
                <Row>
                    <Column><input type="checkbox" key={el._id}/></Column>
                    {/* <Column>{el._id}</Column> */}
                    <Column>{el.seller}</Column>
                    <Column>{el.name}</Column>
                    <Column>{el.price}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column><button id={el._id} onClick={onClickDelete}>삭제하기</button></Column>
                </Row>
            ))}

        </div>

    )
}