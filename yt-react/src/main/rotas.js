import React from 'react';

import {Route, Switch, HashRouter} from 'react-router-dom';
import Login from '../views/login';
import CadastroUsuario from '../views/cadastroUsuario';
import Home from '../views/home';
import Lancamentos from '../views/lancamentos/lancamentos';

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/lancamentos" component={Lancamentos}/>
                <Route path="/cadastro-usuarios" component={CadastroUsuario}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Home}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas;