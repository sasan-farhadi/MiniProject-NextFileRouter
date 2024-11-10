import { useQuery } from "@tanstack/react-query"
import styles from "./home.module.css"
import allProducts from "../../services/products"
import sp from "../../helper/number"

const HomePage = () => {
    const { data } = useQuery(["get-products"], allProducts)
    console.log(data)
    return (
        <div>
            {/* <div className={styles.titletext}>
                <h2>لیست محصولات</h2>
            </div>
            <div className={styles.container}>
                {
                    data?.data.data.map(x => (
                        <div key={x.id} className={styles.card}>
                            <div className={styles.topsection}>
                                <div className={styles.border}></div>
                            </div>
                            <div className={styles.bottomsection}>
                                <span className={styles.title}>{x.name}</span>
                                <div className={styles.row}>
                                    <div className={styles.item}>
                                        <span className={styles.bigtext}>{x.quantity}</span>
                                        <span className={styles.regulartext}>موجودی</span>
                                    </div>
                                    <div className={styles.item}>
                                        <span className={styles.bigtext}>{sp(x.price)}</span>
                                        <span className={styles.regulartext}>تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div> */}
        </div>
    )
}

export default HomePage
