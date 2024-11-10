import styles from "./home.module.css"
import Link from "next/link"

const HomePage = ({ data }) => {
    return (
        <>
            <div className={styles.titletext}>
                <h2>لیست محصولات</h2>
            </div>
            <div className={styles.container}>
                {
                    data?.data.map(x => (
                        <Link href={x.id} key={x.id} >
                            <div className={styles.card}>
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
                                            <span className={styles.bigtext}>{x.price}</span>
                                            <span className={styles.regulartext}>تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div >
        </>
    )
}
export default HomePage
