import React, { Component } from 'react';
import paleta from '../images/paleta.png';
import fuente from '../images/fuente.png';
import escribe from '../images/escribe.svg';

class Hero extends Component {
	render() {
		return (
			<section className="personalizatucv">
				<ul className="personalizar">
					<li className="perscolor">
						<div>
							<img src={paleta} alt="paleta"/>
						</div>
						<div><p>Paso 1: Elige el color</p>
						</div>
					</li>
					<li className="persfuente">
						<div>
							<img src={fuente} alt="fuente"/>
						</div>
						<div>
							<p>Paso 2: Elige la fuente</p>
						</div>
					</li>
					<li className="persestilo">
						<div>
							<img src={escribe} className="lapiz" alt="lapiz"/>
						</div>
						<div><p>Paso 3: Rellena tus datos</p>
						</div>
					</li>
				</ul>
			</section>
		);
	}
}

export default Hero;
