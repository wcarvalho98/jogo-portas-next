import Cartao from '../components/Cartao';
import styles from '../styles/Formulario.module.css';
import Link from 'next/link';
import EntradaNumerica from '../components/EntradaNumerica';
import { useState } from 'react';

export default function Formulario() {
    const [qtdePortas, setQtdePortas] = useState(3)
    const [comPresente, setComPresente] = useState(1)

    const averiguaAdicionar = (qtdeAtual: number, valorMax: number) => qtdeAtual < valorMax
    const averiguaRemover = (qtdeAtual: number, valorMin: number) => qtdeAtual > valorMin

    return (
        <div className={styles.formulario}>
            <div>
                <Cartao bgcolor="#c0392c">
                    <h1>Monty Hall</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica text="Qtde Portas?" value={qtdePortas}
                        onChange={novaQuantidade => setQtdePortas(novaQuantidade)}
                        podeIncrementar={averiguaAdicionar(qtdePortas, 100)}
                        podeDecrementar={averiguaRemover(qtdePortas, comPresente > 3 ? comPresente : 3)} />
                </Cartao>
            </div>
            <div>
                <Cartao>
                    <EntradaNumerica text="Porta com presente?" value={comPresente}
                        onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}
                        podeIncrementar={averiguaAdicionar(comPresente, qtdePortas)}
                        podeDecrementar={averiguaRemover(comPresente, 1)} />
                </Cartao>
                <Cartao bgcolor="#28a085">
                    <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Cartao>
            </div>
        </div>
    )
}
