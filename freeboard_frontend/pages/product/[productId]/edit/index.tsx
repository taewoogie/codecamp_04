import ProductWrite from "../../../../src/components/units/product/write/ProductWrite.container";
import { FETCH_USED_ITEM } from "../../../../src/components/units/product/detail/ProductDetail.queries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

export default function ProductEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });

  return <ProductWrite isEdit={true} data={data} />;
}
