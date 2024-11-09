import Link from "next/link"

import styles from "./LoginForm.module.css"
import { login } from "../../services/auth"
import { useState } from "react"

import toast, { Toaster } from "react-hot-toast"
import { setCookie } from "../../utils/cookie"

import { useRouter } from "next/router"


const LoginForm = () => {
    const router = useRouter()
    const [form, setForm] = useState({ username: "", password: "" })
    const { username, password } = form

    const changeHanlder = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        const { response, error } = await login(username, password)
        if (response) {
            toast.success("ورود با موفقیت انجام شد")
            setCookie(response.data)
            router.push("/admin")
        } else if (error) {
            toast.error("نام کاربری یا رمز عبور اشتباه است")
            return
        }
    }
    return (
        <form className={styles.form} onChange={changeHanlder} onSubmit={loginHandler}>
            <div>
                <img src="logo.png" alt="" />
                <h3>فرم ورود</h3>
            </div>
            <div className={styles.inputs}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="نام کاربری"
                    defaultValue={username}
                />

                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="رمز عبور"
                    defaultValue={password}
                />
            </div>

            <button type='submit' >ورود</button>
            <Toaster />
            <Link href="/register">ایجاد حساب کاربری؟</Link>
        </form>
    )
}

export default LoginForm
