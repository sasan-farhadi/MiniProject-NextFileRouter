import { useRouter } from "next/router";

const ProductDetails = () => {
    const router = useRouter()
    const {productId} = router.query
    return (
        <>
            <h3>جزئیات محصول با شناسه {productId}</h3>
        </>
    )
}
export default ProductDetails

