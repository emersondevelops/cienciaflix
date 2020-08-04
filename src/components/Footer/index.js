import React from 'react';
import { FooterBase } from './styles';
import IconeFooter from '../../assets/img/icone-footer.svg';
import './styles.css';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="iconeFooter" src={IconeFooter} alt="Logo Alura" />
      </a>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://www.linkedin.com/in/emersondasb/">Emerson Bezerra</a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
