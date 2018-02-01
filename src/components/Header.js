import React, { Component } from 'react';
import logo from '../images/logo.png';
import compartir2 from '../images/compartir2.png';
import preview1 from '../images/preview1.svg';
import print from '../images/print.svg';
import aboutus from '../images/aboutus.svg';

class Header extends Component {
	render() {
		return (
			<header id="header" className="header">
				<div className="logo-cabecera">
					<a href="index.html"><img src={logo} alt="logo-equipo"/></a>
				</div>
				<nav>
					<ul className="menu">
						<li>
							<a href="http://www.twitter.com/share?url=https://adalab.github.io/clarke-s2-nan" target="_blank"/><img className="compartir" src={compartir2} alt="compartir"/>
						</li>
						<li>
							<img className="preview" src={preview1} alt="vista previa"/>
						</li>
						<li>
							<img className="print" src={print} alt="icono imprimir"/>
						</li>
						<li>
							<a className="link-aboutus" href="about-us.html">
								<img className="aboutus" src={aboutus} alt="about us"/>
							</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
