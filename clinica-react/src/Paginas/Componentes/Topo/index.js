import React from 'react';

import './style.css';

import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header className="topo">

            <div className="largura-tela topo__container">

                <Link to="/">
                    <img src="assets\logo.png" alt="Logotipo da CMLife" title="Clínica Médica Life" />
                </Link>

                <nav className="topo__links">
                    <a href="/#sobre">Sobre</a>
                    <Link to="/especialidades">Especialidades</Link>
                    <a href="/#contato">Contato</a>
                </nav>

            </div>

        </header>
    )
}