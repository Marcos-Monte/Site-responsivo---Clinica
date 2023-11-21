import React from 'react';

function Sobre() {
    return (
        <section className="largura-tela" id="sobre">

            <div className="conteudo">
                <h2>Sobre a clínica</h2>
                <p>Nossa clínica está pronta para receber nossos pacientes através de uma excelente estrutura, comodidade e com a segurança de que você precisam.</p>
            </div>

            <div className="conteudo2">

                <img src="./assets/medico.jpg" alt="Imagem de um médico apontando para os itens da lista" />

                <ul className="conteudo__lista">

                    <h3>Aqui na nossa clínica você vai encontrar:</h3>

                    <li>Horário flexível. Atendemos de segunda à sábado.</li>
                    <li>Estacionamento amplo com 600 vagas.</li>
                    <li>Sala de espera com TV e Wifi.</li>
                    <li>Agendamento pelo telefone ou WhatsApp.</li>
                    <li>Excelente localização.</li>
                    <li>Entrega de exames em sua residência</li>

                </ul>

            </div>

        </section>
    )
}

export default Sobre;