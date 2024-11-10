import { logoutHandler } from '../../utils/cookie'
import styles from './header.module.css'
import Link from "next/link"

const Header = () => {
    // const token = getCookie("token")
    const token = true

    return (
        <>
            <div className={styles.header}>
                {
                    token ? (
                        <>
                            <Link className={styles.profile} href="/admin">بخش کاربری</Link>
                            <Link onClick={logoutHandler} className={styles.exit} href="/">خروج</Link>
                        </>
                    ) : (
                        <>
                            <Link href="/register">ثبت نام</Link>
                            <Link className={styles.login} href="/login">ورود</Link>
                        </>
                    )
                }
            </div>
        </>
    )
}
export default Header