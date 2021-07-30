import PortaModel from "../model/porta";

export function criarPortas(qtde: number, portaComPresente: number): PortaModel[] {
    return Array.from({ length: qtde }, (_, i) => new PortaModel(i + 1, i + 1 === portaComPresente))
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero
        let portaFinal
        if (igualAModificada) {
            portaFinal = portaModificada
        } else {
            portaFinal = portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
        return portaFinal
    })
}