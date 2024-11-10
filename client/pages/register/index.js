import React, { useEffect } from 'react'
import RegisterForm from '../../components/template/RegisterForm'
import { useRouter } from 'next/router'

const RegisterPage = ({ token }) => {
    const router = useRouter()
    useEffect(() => {
        if (token) {
            router.push("/admin")
        }
    }, [])

    return (
        <div>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage



export async function getServerSideProps(context) {
    const token = context.req.headers.cookie || ""
    return {
        props: { token },
    }
}