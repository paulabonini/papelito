function RulesPage() {
    return <div>

        <h1>Regras</h1>
        <ol>
            <li>Divisão de times
                <p>Devem ter ao menos 2 times. Os times devem ser formados por um número igual de jogadores. Ou não.</p>
            </li>

            <li>Hora do show
                <li>Insira o nome dos jogadores de cada time.</li>
                <li>Cada jogador deve inserir três palavras aleatórias sem mostrar para os outros jogadores.</li>
                <li>O jogo acontece em 3 fases:
                    <ol>
                        <li>Fase 1: Descrição
                            <p>Um jogador de cada time deve descrever as palavras, sorteadas automaticamente, para seu time em 1 minuto, sem usar a palavra em si.</p>
                        </li>
                        <li>Fase 2: Uma palavra
                            <p>Um jogador de cada time deve descrever as palavras para seu time usando apenas uma palavra em 1 minuto.</p>
                        </li>
                        <li>Fase 3: Mímica
                            <p>Um jogador de cada time deve representar as palavras para seu time usando mímica em 1 minuto.</p>
                        </li>
                    </ol>
                </li>
                <li>Não se pode usar palavras com o mesmo radical para descrever a palavra.</li>
                <li>O jogador só pode passar para a próxima palavra quando seu time acertar EXATAMENTE a palavra da vez.</li>
                <li>Ao fim de cada fase o jogo mostra a parcial dos pontos de cada time que equivale ao número de palavras acertadas. O time que somar mais pontos ao fim da terceira fase ganha o jogo.</li>

            </li>
        </ol>

    </div>
}

export default RulesPage;