import React from 'react';

import { Header } from '../../components/Header/';
import { Background } from '../../components/Background';
import { Steps } from '../../components/Steps';

import './index.css';


const Home = () => {
    return(
        <>
            <div className="container">
                <Header/>
                <Background/>
                <Steps/>
            </div>
        </>
    )
}

export default Home;