import { useMutation } from "@tanstack/react-query"
import styles from "./deleteProduct.module.css"
import { deleteProduct } from "../../services/products"
import toast from "react-hot-toast"

const DeleteProduct = ({ setDeleteModal, selectProductId }) => {
    const { mutate } = useMutation(deleteProduct)
    const deleteHandler = () => {
        mutate(selectProductId, {
            onSuccess: () => {
                toast.success("محصول با موفقیت حذف گردید")
                setDeleteModal(null)
                location.reload()
            },
            onError: (err) => {
                toast.error("حذف ناموفق")
                console.log(err)
            }
        })

    }
    return (
        <div className={styles.container} >
            <div className={styles.form} >
                <div>
                    <img src="Close.svg" />
                </div>
                <h4>آیا از حذف این محصول مطمئن هستید؟</h4>

                <div className={styles.button}>
                    <button onClick={deleteHandler} >حذف</button>
                    <button onClick={() => setDeleteModal(null)}>لغو</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteProduct
