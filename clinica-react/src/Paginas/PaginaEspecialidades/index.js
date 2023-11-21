import React from 'react';

import './style.css';

import Footer from '../Componentes/Rodape';
import Header from '../Componentes/Topo';

function PaginaEspecialidades() {
    return (
        <div className="especialidades">
            <Header />
            <main>
                <section class="largura-tela navegacao">
                    <nav>
                        <a href="#ortopedia">ortopedia</a>
                        <a href="#pediatria">pediatria</a>
                        <a href="#geriatria">geriatria</a>
                        <a href="#psicologia">psicologia</a>
                        <a href="#fisioterapia">fisioterapia</a>
                    </nav>
                    <h1>Conheça as nossas especialidades</h1>
                </section>

                <section class="largura-tela" id="ortopedia">

                    <div class="conteudo">
                        <h2>Ortopedia</h2>
                        <p>A ortopedia é a especialidade médica que cuida da saúde relacionadas aos elementos do aparelho locomotor, como ossos, músculos, ligamentos e articulações.</p>
                    </div>

                    <div class="quadro">

                        <img src="assets/ortopedia.png" alt="Imagem de um médico" title="Imagem de um médico" />

                        <table class="tabela-especialidade">
                            <thead>
                                <tr>
                                    <th>Dias</th>
                                    <th>Horários</th>
                                    <th>Médico(a)</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Segunda e quartas</td>
                                    <td>8:00 às 13:00</td>
                                    <td>Dra. Daniele Almeida</td>
                                </tr>
                                <tr>
                                    <td>Terça, Quinta e Sexta</td>
                                    <td>14:00 às 21:00</td>
                                    <td>Dr. Daniel Souza</td>
                                </tr>
                                <tr>
                                    <td>Sábado</td>
                                    <td>8:00 às 21:00</td>
                                    <td>Dr. Manoel Bento</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                </section>

                <section class="largura-tela" id="pediatria">

                    <div class="conteudo">

                        <h2>Pediatria</h2>
                        <p>A pediatria é a especialidade médica dedicada à assistência à criança e ao adolescente, nos seus diversos aspectos, sejam eles preventivos ou curativos.</p>

                    </div>

                    <div class="quadro">

                        <img src="assets/pediatra2.png" alt="Imagem de uma pediatra" title="Imagem de uma pediatra" />

                        <table class="tabela-especialidade">
                            <thead>
                                <tr>
                                    <th>Dias</th>
                                    <th>Horários</th>
                                    <th>Médico(a)</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Segunda e quartas</td>
                                    <td>8:00 às 15:00</td>
                                    <td>Dra. Elaine pinheiro</td>
                                </tr>
                                <tr>
                                    <td>Terça, Quinta e Sexta</td>
                                    <td>13:00 às 21:00</td>
                                    <td>Dr. Anderson Ramos</td>
                                </tr>
                                <tr>
                                    <td>Sábado</td>
                                    <td>8:00 às 12:00</td>
                                    <td>Dra. Manoela Foster</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                </section>

                <section class="largura-tela" id="geriatria">

                    <div class="conteudo">
                        <h2>Geriatria</h2>
                        <p>Medicina geriátrica ou geriatria é o ramo da medicina que foca o estudo, a prevenção e o tratamento de doenças e da incapacidade em idades avançadas.</p>
                    </div>

                    <div class="quadro">

                        <img src="assets/geriatra.png" alt="Imagem de uma geriatra" title="Imagem de uma geriatra" />

                        <table class="tabela-especialidade">
                            <thead>
                                <tr>
                                    <th>Dias</th>
                                    <th>Horários</th>
                                    <th>Médico(a)</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Segunda e quinta</td>
                                    <td>9:00 às 12:00</td>
                                    <td>Dr. Antônio Freitas</td>
                                </tr>
                                <tr>
                                    <td>Terça e Quarta</td>
                                    <td>9:00 às 16:00</td>
                                    <td>Dr. Alfred Conceição</td>
                                </tr>
                                <tr>
                                    <td>Sexta</td>
                                    <td>08:00 às 19:00</td>
                                    <td>Dr. Almir Aguiar</td>
                                </tr>
                                <tr>
                                    <td>Sábado</td>
                                    <td>08:00 às 14:00</td>
                                    <td>Dra. Andrea Almeida</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section class="largura-tela" id="psicologia">

                    <div class="conteudo">
                        <h2>Psicologia</h2>
                        <p>Psicologia é a especialidade médica que trata da mente, do estudo e análise de seus processos e comportamento de indivíduos e grupos humanos em diferentes situações.</p>
                    </div>

                    <div class="quadro">

                        <img src="assets/psicologo.png" alt="Imagem de um psicólogo" title="Imagem de um psicólogo" />

                        <table class="tabela-especialidade">
                            <thead>
                                <tr>
                                    <th>Dias</th>
                                    <th>Horários</th>
                                    <th>Médico(a)</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Segunda, terça e quarta</td>
                                    <td>8:00 às 21:00</td>
                                    <td>Dra. Diane Faguntes</td>
                                </tr>
                                <tr>
                                    <td>Quinta e Sexta</td>
                                    <td>14:00 às 18:00</td>
                                    <td>Dr. Daniel Dias</td>
                                </tr>
                                <tr>
                                    <td>Sábado</td>
                                    <td>10:00 às 15:00</td>
                                    <td>Dra. Beatriz Luz</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                </section>

                <section class="largura-tela" id="fisioterapia">

                    <div class="conteudo">
                        <h2>Fisioterapia</h2>
                        <p>Fisioterapia é uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de disfunções cinéticas funcionais de órgãos e sistemas.</p>
                    </div>

                    <div class="quadro">

                        <img src="assets/fisioterapia.png" alt="Imagem de uma fisioterapeuta" title="Imagem de uma fisioterapeuta" />

                        <table class="tabela-especialidade">
                            <thead>
                                <tr>
                                    <th>Dias</th>
                                    <th>Horários</th>
                                    <th>Médico(a)</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Segunda e quinta</td>
                                    <td>11:00 às 20:00</td>
                                    <td>Dr. Alberto de Paula</td>
                                </tr>
                                <tr>
                                    <td>Segunda e quartas</td>
                                    <td>08:00 às 15:00</td>
                                    <td>Dra. Maria Fernades</td>
                                </tr>
                                <tr>
                                    <td>Terça e sexta</td>
                                    <td>14:00 às 21:00</td>
                                    <td>Dra. Elaine Peixoto</td>
                                </tr>
                                <tr>
                                    <td>Terça e quinta</td>
                                    <td>08:00 às 14:00</td>
                                    <td>Dra. Elaine Peixoto</td>
                                </tr>
                                <tr>
                                    <td>Quarta e Sábado</td>
                                    <td>8:00 às 21:00</td>
                                    <td>Dra. Bianca Rocha</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                </section>

            </main>
            <Footer />
        </div>
    )
}

export default PaginaEspecialidades;