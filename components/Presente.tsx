import styles from "../styles/Presente.module.css"

export default function Presente() {
    return(
        <>
            <div className={styles.presente}>
                <div className={styles.topo}></div>
                <div className={styles.corpo}></div>
                <div className={styles.laco__vertical}></div>
                <div className={styles.laco__horizontal}></div>
            </div>
        </>
    )
}