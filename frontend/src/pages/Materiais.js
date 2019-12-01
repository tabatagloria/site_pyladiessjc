import React from 'react';
import './Materiais.css';
import logo from '../assets/amarelo.jpg';
import logo2 from '../assets/logoamarelo.png';
import django from '../assets/django.png';
import face from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import gmail from '../assets/gmail.png';
import github from '../assets/github.png';
import python from '../assets/python.jpg'
import pyladies from '../assets/original.png'
import { Link } from 'react-router-dom';

export default function Conduta() {
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
            <div className="fotos2">
                <p>
                    <img id="django" src={django} alt="Django_Girls" />
                </p>
            </div>
            <div className="links">
                    <p>Link Django Girls: <a href='https://tutorial.djangogirls.org/pt/'>https://tutorial.djangogirls.org/pt/</a></p>
                    <p>Link GitHub: <a href='https://github.com/PyladiesSJC'>https://github.com/PyladiesSJC</a></p>
                    <p>Link Documentação do Processo de Criação de um PyLadies Regional: <a href='https://github.com/pyladies-brazil/documentation-creation-regional-pyladies/blob/master/documentation.md'>https://github.com/pyladies-brazil/documentation-creation-regional-pyladies/blob/master/documentation.md</a></p>
                   
            </div>        
            <div className='footer_materiais'>
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