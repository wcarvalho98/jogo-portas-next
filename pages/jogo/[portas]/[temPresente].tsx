import { useEffect, useState } from "react"
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import styles from '../../../styles/Jogo.module.css'
import Link from "next/link"
import { useRouter } from "next/dist/client/router";

export default function jogo() {
    const router = useRouter()

    const [portas, setPortas] = useState([])

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
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button style={{ cursor: "pointer" }}>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}