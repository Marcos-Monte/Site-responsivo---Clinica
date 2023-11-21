import React from 'react';

function Contato() {
    return (
        <section className="largura-tela" id="contato">
            <div className="conteudo">

                <h2>Contato</h2>
                <p>Nossa clínica médica está aberto de <span>segunda à sábado das 6:00 às 21:00</span></p>
                <p>Através do telefone/WhatsApp <span>(21) 99966-5555</span> você pode fazer o agendamento de consultas e exames.</p>
                <p>Estamos localizados no estacionamento do Via Parque Shopping <span>av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro.</span></p>

            </div>

            <iframe className="localizacao" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.117928268739!2d-43.36676602361433!3d-22.982690579201826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1693515728794!5m2!1spt-BR!2sbr" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />

        </section>
    )
}

export default Contato;