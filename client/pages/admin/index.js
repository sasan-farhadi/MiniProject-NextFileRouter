import ProductsList from "../../components/template/ProductsList"
import { useQuery } from "@tanstack/react-query"
import { products } from "../../services/products"
import { useEffect, useState } from "react"
import AddProduct from "../../components/template/addProduct"
import AdminHeader from "../../components/layouts/admin/header"
import { useRouter } from "next/router"


const Admin = ({ token }) => {

    const router = useRouter()
    useEffect(() => {
        if (!token) {
            router.push("/login")
        }
    }, [])

    const [selectPage, setSelectPage] = useState()
    const [showAddProductModal, setShowAddProductModal] = useState(null)

    const { isLoading, data } = useQuery(["get-products", selectPage], products)
    return (
        <>
            <AdminHeader />
            <ProductsList data={data} selectPage={selectPage} setSelectPage={setSelectPage} setShowAddProductModal={setShowAddProductModal} />
            {!!showAddProductModal && <AddProduct setShowAddProductModal={setShowAddProductModal} />}
        </>
    )
}
export default Admin


export async function getServerSideProps(context) {
    const token = context.req.headers.cookie || ""
    return {
        props: { token },
    }
}