import Link from "next/link"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import styles from "./RegisterForm.module.css"
import { register } from "../../services/auth"
import { useRouter } from "next/router"

import toast, { Toaster } from "react-hot-toast"
const RegisterForm = () => {
    const router = useRouter()
    const [form, setForm] = useState({ username: "", password: "", repassword: "" })
    const { username, password, repassword } = form
    const { mutate } = useMutation(register)

    const changeHanlder = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault()

        mutate(form, {
            onSuccess: () => {
                toast.success(`کاربر ${username} با موفقیت ایجاد شد`)
                setForm({ username: "", password: "", repassword: "" })
                router.push("/login")
            },
            onError: (err) => {
                const errStatus = err.response.data.message
                if (errStatus === "User already exists") {
                    toast.error("این کاربر قبلا ایجاد شده است")
                } else {
                    toast.error("مشکلی پیش آمده است")
                }
            },
        })
    }

    return (
        <form onChange={changeHanlder} className={styles.form} onSubmit={submitHandler} >
            <div>
                <img src="logo.png" alt="" />
                <h3>فرم ثبت نام</h3>
            </div>
            <div className={styles.inputs}>
                <input type="text" name="username" id="username" placeholder="نام کاربری" value={username} />
                <input type="password" name="password" id="password" placeholder="رمز عبور" value={password} />
                <input type="password" name="repassword" id="repassword" placeholder="تکرار رمز عبور" value={repassword} />
            </div>
            <button type='submit'>ثبت نام</button>
            <Toaster />
            <Link href="/login">حساب کاربری دارید؟</Link>
        </form>
    )
}

export default RegisterForm
