import React from 'react';
import './Principal.css';
import logo from '../assets/amarelo.jpg';
import logo2 from '../assets/logoamarelo.png';
import face from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import gmail from '../assets/gmail.png';
import github from '../assets/github.png';
import { Link } from 'react-router-dom';


export default function Principal() {
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
            <div className='footer'>
                <Link to='/'><img id='logo' src={logo2} alt="Pyladies" /></Link>
                <div className='sociais_icons'>
                    <a href='https://pt-br.facebook.com/pyladiesSJC' title='Facebook'><img src={face} alt="Facebook" /></a>
                    <a href='https://www.instagram.com/pyladiessjc' title='Instagram'><img src={insta} alt="Instagram" /></a>
                    <a href='https://twitter.com/PyladiesSjc' title='Twitter'><img src={twitter} alt="Twitter" /></a>
                    <a href="mailto:tabatabruna.gmail.com?subject=Hello%20again" title='Gmail'><img src={gmail} alt="Gmail" /></a>
                    <a href='https://github.com/PyladiesSJC' title='GitHub'><img id="icon1" src={github} alt="GitHub" /></a>
                </div>
            </div>
        </div>
    );
}