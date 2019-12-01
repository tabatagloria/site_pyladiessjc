import React from 'react';
import './Eventos.css';
import logo from '../assets/amarelo.jpg';
import logo2 from '../assets/logoamarelo.png';
import next from '../assets/next.jpg';
import face from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import gmail from '../assets/gmail.png';
import github from '../assets/github.png';
import python from '../assets/python.jpg'
import pyladies from '../assets/original.png'
import mentoria from '../assets/mentoria.jpeg'
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
            <div className="fotos3">
                <p>
                    <img id="next" src={next} alt="Pyladies" />
                </p>
            </div>
            <div className="eventos">
                <img src={mentoria} alt="Pyladies" />
                <p>Próximo Evento:</p>
                <p>Data: 07/12/19</p>
                <p>Horário: 10:00h</p>
                <p>Local: Sesc São José dos Campos (Avenida Adhemar de Barros, 999 - Vila Adyana)</p>
                <p>O ano tá acabando, mas o PyLadies SJC está a todo vapor!</p>
                <p>E em dezembro, trazemos um evento incrível pra você que deseja ingressar no mercado de trabalho/entender o cenário da linguagem Python nas empresas/tirar dúvidas sobre empreendedorismo.</p>
                <p>Cadu (Necto Systems) e Renzo (Python Pro) estarão com a gente para responder essas questões e dar dicas sobre os assuntos. Não perca!!!</p>
            </div>        
            <div className='footer_eventos'>
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