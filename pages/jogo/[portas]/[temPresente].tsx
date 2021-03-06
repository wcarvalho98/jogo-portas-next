import { useEffect, useState } from "react"
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import styles from '../../../styles/Jogo.module.css'
import Link from "next/link"
import { useRouter } from "next/router";

export default function Jogo() {
    const router = useRouter()

    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const porta = +router.query.portas
        const comPresente = +router.query.temPresente
        const qtdePortasValidas = porta >= 3 && porta <= 100
        const temPresenteValido = comPresente >= 1 && comPresente <= porta

        setValido(qtdePortasValidas && temPresenteValido)
    }, [portas, router.query.portas, router.query.temPresente])

    useEffect(() => {
        const porta = +router.query.portas
        const comPresente = +router.query.temPresente
        setPortas(criarPortas(porta, comPresente))
    }, [router?.query])

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.porta}>
                {valido ? renderizarPortas() : <h1>Valores inválidos!</h1>}
            </div>
            <div className={styles.botoes}>
                <Link href="/" passHref>
                    <button style={{ cursor: "pointer" }}>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}