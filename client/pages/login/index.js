import { useRouter } from "next/router"
import LoginForm from "../../components/template/LoginForm"
import { useEffect } from "react"
const LoginPage = ({ token }) => {
    const router = useRouter()
    useEffect(() => {
        if (token) {
            router.push("/admin")
        }
    }, [])
    return (
        <div>
            <LoginForm />
        </div>
    )
}
export default LoginPage

export async function getServerSideProps(context) {
    const token = context.req.headers.cookie || ""
    return {
        props: { token },
    }
}