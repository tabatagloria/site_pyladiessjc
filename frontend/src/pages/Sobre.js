import React from 'react';
import './Sobre.css';
import logo from '../assets/amarelo.jpg';
import logo2 from '../assets/logoamarelo.png';
import face from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import gmail from '../assets/gmail.png';
import github from '../assets/github.png';
import python from '../assets/python.jpg'
import pyladies from '../assets/original.png'
import { Link } from 'react-router-dom';

export default function Sobre() {
    return (
        <div>
            <div className="barNav">
                <p >
                    <Link to="/"><img id='home' src={logo} alt="Pyladies" /></Link>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/eventos">Eventos</Link>
                    <Link to="/materiais">Materiais</Link>
                    <Link to="/conduta">Código de Conduta</Link>
                </p>
            </div>
            <div className="fotos">
                <p>
                    <img id="python" src={python} alt="Python" />
                    <img id="pyladies" src={pyladies} alt="Pyladies" />
                </p>
            </div>
            <div className="texto">
            
                <p>A Linguagem de Programação Python, foi criada em 1991, pelo matemático Guido van Rossum, linguagem pensada e estruturada para o ensino de programação que possui uma estrutura simples para fácil compeensão.</p>
                <p>O primeiro Pyladies surgiu em Los Angeles, em 2010. Grupo que tem por objetivo divulgar a linguagem Open Source Python e oferecer um suporte amigável às mulheres que possuem pouco ou nenhum conhecimento da área. No Brasil, chegou em 2013 na cidade do Rio Grande do Norte. Atualmente existem mais de 30 comunidades em diversas regiões do país.</p>
                <p>Em São José dos Campos, cidade conhecida por ser um pólo tecnológico, com várias empresas, organizações e faculdades importantes como Unifesp, FATEC e Unesp, teve a fundação do Pyladies São José dos Campos em 2017, após a extinção do Pyladies Vale, que abrangia outras cidades da região (Caçapava e Jacareí).</p>
                <p>A agenda da comunidade engloba: meetups regulares, palestras, tutoriais, café.py, debates...</p>
                <p>Nosso objetivo é aumentar a representatividade das mulheres na região, criar base de conhecimento, oferecer mentoria e suporte as mulheres interessadas na tecnologia.</p>
            </div>
            <div className="fonte">
                <p> Fonte: https://gigazine.net/gsc_news/en/20191031-dropbox-thanks-guido-van-rossum/ e https://www.pyladies.com</p>
            </div>        
            <div className='footer_sobre'>
                <Link to='/'><img id='logo' src={logo2} alt="Pyladies" /></Link>
                <div className='sociais_icons'>
                    <a href='https://pt-br.facebook.com/pyladiesSJC' title='Facebook'><img src={face} alt="Facebook" /></a>
                    <a href='https://www.instagram.com/pyladiessjc' title='Instagram'><img src={insta} alt="Instagram" /></a>
                    <a href='https://twitter.com/PyladiesSjc' title='Twitter'><img src={twitter} alt="Twitter" /></a>
                    <a title='Gmail'><img src={gmail} alt="Gmail" /></a>
                    <a href='https://github.com/PyladiesSJC' title='GitHub'><img id="icon1" src={github} alt="GitHub" /></a>
                </div>
            </div>
        </div>

    );
}