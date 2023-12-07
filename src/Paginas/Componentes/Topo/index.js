import React from 'react';

import './style.css';

import { Link } from 'react-router-dom';


export default function Header() {

    function definirSecao(secao) {
        setTimeout(() => {
            const element = document.getElementById(secao);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }

        }, 100)
    }

    function secaoSobre() {
        const secao = 'sobre';
        definirSecao(secao);
    }

    function secaoContato() {
        const secao = 'contato';
        definirSecao(secao);
    }

    return (
        <header className="topo">

            <div className="largura-tela topo__container">

                <Link to="/">
                    <img src="assets\logo.png" alt="Logotipo da CMLife" title="Clínica Médica Life" />
                </Link>

                <nav className="topo__links">
                    <Link to="/" onClick={secaoSobre}>Sobre</Link>
                    <Link to="/especialidades">Especialidades</Link>
                    <Link to="/" onClick={secaoContato}>Contato</Link>
                </nav>

            </div>

        </header>
    )
}