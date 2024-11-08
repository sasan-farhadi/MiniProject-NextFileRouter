import Link from "next/link"

import styles from "./RegisterForm.module.css"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { register } from "../../services/auth"

const RegisterForm = () => {
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
                alert("success")
            },
            onError: () => {
                alert("error")
            }
        })
    }

    return (
        <form onChange={changeHanlder} className={styles.form} onSubmit={submitHandler} >
            <div>
                <img src="logo.png" alt="" />
                <h3>فرم ثبت نام</h3>
            </div>
            <div className={styles.inputs}>
                <input type="text" name="username" id="username" placeholder="نام کاربری" defaultValue={username} />
                <input type="password" name="password" id="password" placeholder="رمز عبور" defaultValue={password} />
                <input type="password" name="repassword" id="repassword" placeholder="تکرار رمز عبور" defaultValue={repassword} />
            </div>
            <button type='submit'>ثبت نام</button>
            <Link href="/login">حساب کاربری دارید؟</Link>
        </form>
    )
}

export default RegisterForm
