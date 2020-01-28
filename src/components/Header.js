
import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';

class Header extends Component{
    render(){
        return(
            <header id="header">
                <div className="center">
                    <div id="logo">
                       
                        <img src={logo} className="app-logo"/>
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>

               
                <nav id="menu">
                    <ul>
                        <li>
                            <a> Inicio</a>
                        </li>
                        <li>
                            <a> Blog</a>
                        </li>
                        <li>
                            <a> Formulario</a>
                        </li>
                        <li>
                            <a> Pagina 1</a>
                        </li>
                        <li>
                            <a> Pagina 2</a>
                        </li>
                    </ul>
                </nav>
                <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}
export default Header;