import ProductsList from "../../components/template/ProductsList"
import { useQuery } from "@tanstack/react-query"
import { products } from "../../services/products"
import { useState } from "react"
import AddProduct from "../../components/template/addProduct"
import AdminHeader from "../../components/layouts/admin/header"


const Admin = () => {
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