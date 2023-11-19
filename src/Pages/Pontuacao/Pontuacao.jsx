import { StyledPontuacao } from "./PontuacaoStyled";
import { useEffect, useState } from "react";
import { countTaskesFinish } from "../../services/TaskeServices";

export function Pontuacao() {
    const [pontuacao, setPontuacao] = useState(0);

    async function pontuacaoTarefa() {
        try {
            const response = await countTaskesFinish();
            if (response.status === 200) {
                setPontuacao(response.data.total);
            } else {
                console.log(response);
            }
        } catch (error) {
            console.error("Erro ao buscar a pontuação", error);
        }
    }

    pontuacaoTarefa(); // Chame a função diretamente para buscar a pontuação

    return (
        <StyledPontuacao>
            <h1>Pontos</h1>
            <p>Como funciona? Essa pontuação é uma métrica simples que reflete o desempenho ou progresso de alguém em um determinado conjunto de tarefas. Para calcular essa pontuação, você multiplica o número de tarefas concluídas por 10. Isso significa que cada tarefa concluída contribui com 10 pontos para a pontuação total. Quanto mais tarefas forem realizadas, maior será a pontuação, o que pode ser uma maneira eficaz de quantificar o sucesso ou a produtividade em determinado contexto. É uma fórmula direta e fácil de entender que recompensa o cumprimento de metas ou tarefas.</p>
            <div>
                <span>Pontuação: {pontuacao}</span>
            </div>
        </StyledPontuacao>
    )
}
