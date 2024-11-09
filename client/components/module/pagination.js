import styles from "./Pagination.module.css"

const Pagination = ({ setSelectPage, selectPage, totalPage }) => {
    return (
        <div className={styles.pagination}>
            {
                [...Array(totalPage).keys()].map(x => (
                    <p className={selectPage === x + 1 ? styles.active : ""} onClick={() => {
                        setSelectPage(x + 1)
                    }} key={x} id={x + 1}>{x + 1}</p>
                ))
            }
        </div>
    )
}

export default Pagination