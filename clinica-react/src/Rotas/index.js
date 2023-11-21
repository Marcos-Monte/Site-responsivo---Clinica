import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PaginaEspecialidades from '../Paginas/PaginaEspecialidades';
import PaginaInicial from '../Paginas/PaginaInicial';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/home' element={<PaginaInicial />} />
            <Route path='/especialidades' element={<PaginaEspecialidades />} />
        </Routes>
    </BrowserRouter>
)

export default Rotas;