import React from 'react';
import './Conduta.css';
import logo from '../assets/amarelo.jpg';
import logo2 from '../assets/logoamarelo.png';
import logo3 from '../assets/logo.jpg';
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
            <div className="fotos">
                <p>
                    <img id="logo3" src={logo3} alt="Pyladies" />
                </p>
            </div>
            <div className="texto">
            
                <p>A Pyladies se dedica a fornecer uma comunidade respeitosa e sem assédio para todos. Não toleramos assédio ou intimidação de nenhum membro da comunidade, sob qualquer forma. Isso não se estende apenas aos membros das comunidades locais do PyLadies, mas a qualquer pessoa que opte por se envolver na comunidade maior de usuários, desenvolvedores e integradores do PyLadies por meio de eventos ou interações.</p>
                <p>O assédio inclui comentários ofensivos verbais / eletrônicos relacionados a características ou escolhas pessoais, imagens ou comentários sexuais em espaços públicos ou online, intimidação, bullying, perseguição por fotografia ou gravação, reuniões eletrônicas e físicas, meetups ou outros eventos, contato físico inadequado ou atenção sexual indesejada. Os participantes solicitados a interromper qualquer comportamento de assédio ou intimidação devem cumprir imediatamente.</p>
                <p>Se um participante se envolver em um comportamento de assédio, os representantes da comunidade poderão tomar as medidas que considerem apropriadas, incluindo advertir o ofensor, expulsão de qualquer evento do PyLadies ou expulsão dos quadros de discussão, chats, ou outros canais de comunicação eletrônica para resolver o problema/questão. Isso pode incluir a expulsão da associação ao grupo PyLadies São José dos Campos.</p>
                <p>Se você está sendo assediado, ou observou que alguém está sendo assediado ou tem outras preocupações, ajude a interceder ou peça ajuda a qualquer membro da comunidade PyLadies, administradores de bate-papo, administradores de sites ou organizadores / representantes de qualquer agente físico, ou eventos realizados sob os responsabilidade do PyLadies São José dos Campos.</p>
                <p>Este Código de Conduta foi adaptado do Site Pyladies.com sob a licença de Creative Commons Attribution-Share Alike 3.0 Unported</p>
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