import React from 'react';
import NavbarItem from './navbaritem';
import AuthService from '../app/service/authService';

const deslogar = () => {
    AuthService.removerUsuarioAutenticado();
}

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <a className="navbar-brand" href="#/home">Minhas Finanças</a>
            <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarColor03"
                aria-controls="navbarColor03" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <NavbarItem render={AuthService.usuarioAutenticado()} label="Início" href="#/home" />
                    <NavbarItem render={AuthService.usuarioAutenticado()}  label="Lançamentos" href="#/lancamentos" />
                </ul>
            </div>
            <div className="text-white">
                {
                    AuthService.usuarioAutenticado() ?
                        (
                            <div>
                                <div className="collapse navbar-collapse" id="navbarColor03">
                                 Olá, {AuthService.usuarioNome()}! Como estão as finanças?
                                    <ul className="navbar-nav mr-auto">
                                        <NavbarItem render={AuthService.usuarioAutenticado()}  onClick={deslogar} label="Sair" href="#/login" />
                                    </ul>
                                </div>
                            </div>
                        )
                        :
                        (
                            <>
                            </>
                        )
                }

            </div>
        </nav>
    )
}

export default Navbar