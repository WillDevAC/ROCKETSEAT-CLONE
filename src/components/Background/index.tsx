import React from 'react';

import './index.css';

import MaoIcone from '../../assets/icones/mao.svg';
import setaIcone from '../../assets/icones/seta.svg';


export function Background()
{
    return (
        <div className="container-body">
            <div className="content-body">
                
                <div className="container-body-content">

                    <div className="header-body-assets">
                        <img src={MaoIcone} alt="icone mão acenando" />
                        <span> Bem-vindo(a) ao futuro</span>
                    </div>

                    <h1>Seu ecossistema<br/>para aprender e evoluir <br/>na programação</h1>
                    <p>Embarque no foguete com milhares de devs para aprender<br/>
                    desenvolvimento web, evoluir de forma contínua e se <br/>
                    manter relevante no mercado.</p>

                    <div className="content-buttons">
                        <button>EMBARCAR NO FOGUETE</button>
                        <img src={setaIcone} alt="Icone de seta" />
                        <a>Saiba mais</a>
                    </div>

                </div>
            </div>
        </div>
    )
}