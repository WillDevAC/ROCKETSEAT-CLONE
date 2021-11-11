import React from 'react';

import './index.css';

import Logo from '../../assets/logo.png';

export function Header()
{
    return(
        <div className="headerContent">
            <div className="content">

                <img src={Logo} alt="Logo Rocketseat"/>

                <div className="contentLinks">
                    <a>Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                    <a>Link 4</a>
                    <a>Link 5</a>
                    <a>Link 6</a>
                </div>

                <div className="actionButtons">
                    <a>Cadastrar</a>
                    <button>ENTRAR</button>
                </div>

            </div>
        </div>
    )

}