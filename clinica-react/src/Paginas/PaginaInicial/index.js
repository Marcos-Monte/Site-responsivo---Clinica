import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Footer from '../Componentes/Rodape';
import Header from '../Componentes/Topo';
import Contato from './Secoes/Contato';
import Sobre from './Secoes/Sobre';

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


                <Sobre />

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


                <Contato />
            </main>
        </main>
        <Footer />
    </div>
)

export default PaginaInicial;