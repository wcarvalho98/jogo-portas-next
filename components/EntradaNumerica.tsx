import styles from "../styles/EntradaNumerica.module.css";

interface EntradaNumericaProps {
    text: string
    value: number
    onChange: (newValue: number) => void
    podeIncrementar: boolean
    podeDecrementar: boolean
}

export default function EntradaNumerica(props: EntradaNumericaProps) {
    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value > 0 ? props.value : "***"}</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec} disabled={!props.podeDecrementar}>-</button>
                <button className={styles.btn} onClick={inc} disabled={!props.podeIncrementar}>+</button>
            </div>
        </div>
    )
}