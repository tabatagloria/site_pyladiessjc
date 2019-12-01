import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Principal from './pages/Principal';
import Sobre from './pages/Sobre';
import Eventos from './pages/Eventos';
import Materiais from './pages/Materiais';
import Conduta from './pages/Conduta';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Principal} />
            <Route path="/sobre" exact component={Sobre} />
            <Route path="/eventos" exact component={Eventos} />
            <Route path="/materiais" exact component={Materiais} />
            <Route path="/conduta" exact component={Conduta} />
        </BrowserRouter>
    );
}