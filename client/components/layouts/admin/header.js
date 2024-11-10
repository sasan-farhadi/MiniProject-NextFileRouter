import { useState } from "react"
import styles from "./header.module.css"
import { logoutHandler } from "../../../utils/cookie"
import { searchProduct } from "../../../services/products"
import toast from "react-hot-toast"
import Link from "next/link"

const AdminHeader = () => {
    const [showModal, setShowModal] = useState("none")
    const [searchText, setSearchText] = useState()
    const [resultSearch, setResultSearch] = useState({})
    const [searchModal, setSearchModal] = useState("none")
    const searchHandler = async (e) => {
        const id = (e.target.value).trim()
        const { response } = await searchProduct(id)
        if (response) {
            setResultSearch(response.data)
            setSearchModal("block")
        } else {
            toast.error("محصول مورد نظر پیدا نشد یا شناسه اشتباه است")
            return
        }
        if (!id) {
            setSearchModal("none")
        }
    }

    const { name, quantity, price } = resultSearch

    return (
        <>
            <div className={styles.topbar}  >
                <div className={styles.search} >
                    <img src="search.svg" />
                    <input
                        type="text" placeholder="جستجوی کالا بر اساس شناسه محصول"
                        onChange={searchHandler}
                        value={searchText} />
                    <div className={styles.searchmodal} style={{ display: searchModal }}>
                        <h4>نتیجه جستجو</h4>
                        <hr />
                        <ul>
                            <li>نام محصول : {name}</li>
                            <li>تعداد : {quantity}</li>
                            <li>قیمت :  {price}</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.profile}
                    onMouseEnter={() => setShowModal("block")}
                    onMouseLeave={() => setShowModal("none")}>
                    <img src="pic.svg" />
                    <div>
                        <h4>ساسان فرهادی</h4>
                        <p>مدیر</p>
                    </div>
                    <div className={styles.modalProfile} style={{ display: showModal }} >
                        <div><Link href="/">نمایش سایت</Link></div>
                        <div><button onClick={logoutHandler}> خروج</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminHeader