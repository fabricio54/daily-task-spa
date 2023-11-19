import { HomeStyled } from "./HomeStyled";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <HomeStyled>
                <h1>Um pouco sobre o aplicativo</h1>
                <div><img src="./public/images.png" alt="" /><p>Organização: O gerenciamento de tarefas ajuda a organizar suas atividades diárias de forma lógica e estruturada. Isso evita a sensação de sobrecarga e a perda de tempo procurando o que deve ser feito a seguir.</p></div>
                <div><img src="./public/transferir.png" alt="" /><p>Priorização: Ao listar suas tarefas, você pode identificar as mais importantes e urgentes, permitindo que você as aborde primeiro. Isso garante que você dedique tempo e energia às atividades que realmente importam.</p></div>
                <div><img src="./public/produtividade.png" alt="" /><p>Produtividade: O gerenciamento de tarefas ajuda a manter o foco e a evitar distrações. Ao se concentrar em tarefas específicas, você se torna mais produtivo e eficaz na conclusão delas.</p></div>
                <div><img src="./public/estresse.png" alt="" /><p>Redução do Estresse: Quando você tem uma lista de tarefas bem definida, o estresse associado à sensação de sobrecarga diminui. Você sabe o que precisa fazer e pode planejar de acordo.</p></div>
                <div><img src="./public/gerenciamento.png" alt="" /><p>Melhor Gerenciamento do Tempo: Ao definir prazos e estimativas de tempo para suas tarefas, você se torna mais consciente de como está gastando o tempo. Isso ajuda a evitar o desperdício de tempo em atividades improdutivas.</p></div>
                <div><img src="./public/metas.png" alt="" /><p>Cumprimento de Metas: O gerenciamento de tarefas é essencial para alcançar metas a longo prazo. Ao dividir grandes objetivos em tarefas menores e alcançáveis, você pode progredir constantemente em direção às suas metas.</p></div>
                <div><img src="./public/eficiente.png" alt="" /><p>Comunicação Eficiente: Em um ambiente de trabalho, compartilhar uma lista de tarefas ajuda a manter todos na mesma página. Isso melhora a comunicação e a colaboração entre colegas de trabalho.</p></div>
                <div><img src="./public/continuo.png" alt="" /><p>Aprendizado Contínuo: Avaliar suas tarefas concluídas e o que não foi feito permite que você aprenda com sua experiência. Você pode identificar padrões de produtividade e áreas em que pode melhorar.</p></div>
                <div><img src="./public/autoconfianca.png" alt="" /><p>Autoconfiança: À medida que você completa tarefas e riscar itens da lista, você ganha confiança em sua capacidade de realizar o que planejou. Isso aumenta sua autoestima.</p></div>
                <div><img src="./public/equilibrio.png" alt="" /><p>Equilíbrio Trabalho-Vida: Um bom gerenciamento de tarefas permite que você aloque tempo para o trabalho, mas também para sua vida pessoal e lazer. Isso ajuda a evitar o esgotamento e a manter um equilíbrio saudável.</p></div>
            </HomeStyled>
            
        </>
    )
}