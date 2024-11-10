import { useState } from 'react'
import styles from './editProduct.module.css'
import { useMutation } from '@tanstack/react-query'
import { editProduct } from '../../services/products'
import toast, { Toaster } from 'react-hot-toast'

const EditProduct = ({ setEditModal, editRecord }) => {

    const [form, setForm] = useState({ id: editRecord.id, name: editRecord.name, quantity: editRecord.quantity, price: editRecord.price })
    const { name, quantity, price } = form

    const { mutate } = useMutation(editProduct)

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const [btnName, setBtnName] = useState("انصراف")
    const submitHandler = e => {
        e.preventDefault()

        mutate(form, {
            onSuccess: () => {
                toast.success("محصول ویرایش گردید")
                setBtnName("اتمام")
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
                    <h3> ویرایش اطلاعات </h3>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="name">نام کالا</label>
                    <input
                        defaultValue={name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="نام کالا"
                    />

                    <label htmlFor="quantity">تعداد موجودی</label>
                    <input
                        defaultValue={quantity}
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="تعداد"
                    />

                    <label htmlFor="price">قیمت</label>
                    <input
                        defaultValue={price}
                        type="number"
                        name="price"
                        id="price"
                        placeholder="قیمت"
                    />
                </div>
                <div className={styles.button}>
                    <button type='submit' >ثبت اطلاعات جدید</button>
                    <button onClick={() => {
                        setEditModal(null)
                    }} >{btnName}</button>
                </div>
                <Toaster />
            </form>
        </div>
    )
}

export default EditProduct
