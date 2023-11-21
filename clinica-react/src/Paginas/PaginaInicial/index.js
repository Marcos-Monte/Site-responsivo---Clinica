import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Footer from '../Componentes/Rodape';
import Header from '../Componentes/Topo';

const PaginaInicial = () => (
    <div className="inicial">
        <Header />
        <main>
            <main>
                <section className="banner">

                    <div className="largura-tela banner__container">
                        <h2>clinica médica life</h2>
                        <h2>aqui a gente cuida de você</h2>
                    </div>

                </section>

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

                <section className="largura-tela">

                    <div className="conteudo">
                        <h2>Uma clínica de multiespecialidade</h2>
                        <p>Nossa clínica possui diversas especialidades. Como ortopedia, pediatra, geriatria, psicologia, fisioterapia e outros.</p>
                    </div>

                    <div className="galeria-imagens">

                        <figure className="imagem">
                            <img src="./assets/ortopedia1.png" alt="" />
                            <figcaption>ortopedia</figcaption>
                        </figure>

                        <figure className="imagem">
                            <img src="./assets/pediatra.png" alt="" />
                            <figcaption>pediatria</figcaption>
                        </figure>

                        <figure className="imagem">
                            <img src="./assets/geriatra.png" alt="" />
                            <figcaption>geriatria</figcaption>
                        </figure>


                    </div>

                    <div className="botao">
                        <Link to="/especialidades">ver horários</Link>
                    </div>



                </section>

                <section className="largura-tela" id="contato">
                    <div className="conteudo">

                        <h2>Contato</h2>
                        <p>Nossa clínica médica está aberto de <span>segunda à sábado das 6:00 às 21:00</span></p>
                        <p>Através do telefone/WhatsApp <span>(21) 99966-5555</span> você pode fazer o agendamento de consultas e exames.</p>
                        <p>Estamos localizados no estacionamento do Via Parque Shopping <span>av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro.</span></p>

                    </div>

                    <iframe className="localizacao" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.117928268739!2d-43.36676602361433!3d-22.982690579201826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1693515728794!5m2!1spt-BR!2sbr" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />

                </section>
            </main>
        </main>
        <Footer />
    </div>
)

export default PaginaInicial;