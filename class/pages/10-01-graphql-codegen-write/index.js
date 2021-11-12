import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CRERATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationProductPage() {
  const router = useRouter();
  const [createProduct] = useMutation(CRERATE_PRODUCT);

  const [Seller, setSeller] = useState("");
  const [ProductName, setProductName] = useState("");
  const [ProductContents, setProductContents] = useState("");
  const [ProductPrice, setProductPrice] = useState("");

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeProductName = (event) => {
    setProductName(event.target.value);
  };

  const onChangeProductContents = (event) => {
    setProductContents(event.target.value);
  };

  const onChangeProductPrice = (event) => {
    setProductPrice(event.target.value);
  };

  const Request = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: Seller,
          createProductInput: {
            name: ProductName,
            detail: ProductContents,
            price: Number(ProductPrice),
          },
        },
      });
      console.log(result);

      // 페이지 이동
      router.push(
        `/05-08-dynamic-product-read/${result.data.createProduct._id}`
      ); // 템플릿 리터럴
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      판매자 : <input type="text" onChange={onChangeSeller} /> <br />
      상품명 : <input type="text" onChange={onChangeProductName} /> <br />
      상품내용 : <input type="text" onChange={onChangeProductContents} /> <br />
      상품가격 : <input type="text" onChange={onChangeProductPrice} /> <br />
      <button onClick={Request}>상품 등록하기</button>
    </>
  );
}
