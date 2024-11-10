import { useState } from 'react'
import styles from './addProduct.module.css'
import { useMutation } from '@tanstack/react-query'
import { addProduct } from '../../services/products'
import toast, { Toaster } from "react-hot-toast"

const AddProduct = ({ setShowAddProductModal }) => {

    const [form, setForm] = useState({ name: "", quantity: "", price: "" })
    const { name, quantity, price } = form
    const { mutate } = useMutation(addProduct)

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault()


        if (!name || !quantity || !price) {
            toast.error("اطلاعات را تکمیل کنید")
            return
        } else if (quantity <= 0 || price <= 0) {
            toast.error("عدد نمی تواند صفر یا منفی باشد")
            return
        }

        mutate(form, {
            onSuccess: () => {
                toast.success("محصول اضافه گردید")
                setForm({ name: "", quantity: "", price: "" })
            },
            onError: (err) => {
                console.log(err)
            }
        })
    }

    return (
        <div className={styles.container} onSubmit={submitHandler}>
            <form className={styles.form} onChange={changeHandler}>
                <div>
                    <h3> ایجاد محصول جدید </h3>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="name">نام کالا</label>
                    <input type="text" name="name" id="name" placeholder="نام کالا" value={name} />

                    <label htmlFor="quantity">تعداد موجودی</label>
                    <input type="number" name="quantity" id="quantity" placeholder="تعداد" value={quantity} />

                    <label htmlFor="price">قیمت</label>
                    <input type="number" name="price" id="price" placeholder="قیمت" value={price} />
                </div>
                <div className={styles.button}>
                    <button type='submit' >ایجاد</button>
                    <button onClick={() => setShowAddProductModal(null)}>انصراف</button>
                </div>
                <Toaster />
            </form>
        </div>
    )
}
export default AddProduct