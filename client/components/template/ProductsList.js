import { useState } from "react"
import { sp, e2p } from "../../helper/number"
import Pagination from "../module/pagination"
import styles from "./ProductsList.module.css"
import { useQuery } from "@tanstack/react-query"
import { allProducts } from "../../services/products"
import EditProduct from "./editProduct"
import DeleteProduct from "./deleteProduct"

const ProductsList = ({ data, setSelectPage, selectPage, setShowAddProductModal }) => {
    const totalPage = data?.data.totalPages

    const { data: allData } = useQuery(["get-products"], allProducts)


    //delete handler
    const [deleteModal, setDeleteModal] = useState(null)
    const [selectProductId, setSelectProductId] = useState("")
    const deleteHandler = id => {
        setDeleteModal(true)
        setSelectProductId(id)
    }


    //edit handler
    const [editModal, setEditModal] = useState(null)
    const [editRecord, setEditRecord] = useState([])
    const editHandler = id => {
        const res = allData?.data.data.find(x => x.id === id)
        setEditModal(true)
        setEditRecord(res)
    }
    return (
        <>
            <div className={styles.addProducts}>
                <div>
                    <img src="setting.svg" alt="" />
                    <h2>مدیریت کالا</h2>
                </div>
                <div><button onClick={() => setShowAddProductModal(true)}>افزودن محصول</button></div>
            </div>
            <div className={styles.list}>
                <div className={styles.title}>
                    <h4> نام کالا </h4>
                    <h4> موجودی </h4>
                    <h4> قیمت </h4>
                    <h4> شناسه کالا </h4>
                    <h4></h4>
                    <h4></h4>
                </div>
                {
                    data?.data.data.map(x => (
                        <div key={x.id} className={styles.item}>
                            <p>{x.name}</p>
                            <p>{e2p(x.quantity)}</p>
                            <p>{sp(x.price)}</p>
                            <p>{x.id}</p>
                            <p></p>
                            <p>
                                <img src="edit.svg" alt="" onClick={() => editHandler(x.id)} />
                                <img onClick={() => deleteHandler(x.id)} src="trash.svg" alt="" />
                            </p>
                        </div>
                    ))
                }
            </div>
            <Pagination setSelectPage={setSelectPage} selectPage={selectPage} totalPage={totalPage} />
            {!!deleteModal && <DeleteProduct setDeleteModal={setDeleteModal} selectProductId={selectProductId} />}
            {!!editModal && <EditProduct setEditModal={setEditModal} editRecord={editRecord} />}
        </>
    )
}

export default ProductsList
