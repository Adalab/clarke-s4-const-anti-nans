import React, { Component } from 'react';
import background1 from '../images/background1.jpeg';

class Preview extends Component {

	render() {
		return (
			<section id="printcv" className="cv type-font">
				<section className="prev-info-personaldates prev-contact color-lateral">
					<h1 className="prev-titles">Datos de contacto</h1>
					<div className="prev-photo prev-personalcontent">
						<img src={background1} alt="Foto Personal" width="120" height="120" id="foto"/>
					</div>
					<ul className="prev-list-personal">
						<li id="nombre" className="prev-contactdetails ">{this.props.name}</li>
						<li id="apellidos" className="prev-contactdetails">{this.props.surnames}</li>
						<li id="profesion" className="prev-contactdetails">{this.props.profession}</li>
						<li id="direccion" className="prev-contactdetails"></li>
						<li id="mail" className="prev-contactdetails cut-url">{this.props.email}</li>
						<li id="telefono" className="prev-contactdetails">{this.props.phone}</li>
						<li className="prev-contactdetails cut-url">{this.props.twitter}</li>
						<li className="prev-contactdetails cut-url">{this.props.linkedin}</li>
					</ul>
				</section>
				<section className="prev-description">
					<h2 className="prev-titles">Extracto</h2><hr/>
					<p id="resumen" className="prev-contactdetails">{this.props.summary}</p>
				</section>
				<div className="prev-content">
					<section className="prev-info-experience">
						<section className="prev-education">
							<h2 className="prev-titles">Formación académica</h2><hr/>
							<div className="prev-educationdetails">
								{
									this.props.studyArr.map((study,i) =>
										<ul key={i}>
											<li><strong>Titulación: </strong>{study.educationStudies}</li>
											<li><strong>Tipo de estudios: </strong>{study.typeStudies}</li>
											<li><strong>Centro de estudios: </strong>{study.educationInstitution}</li>
											<li><strong>Año de inicio: </strong>{study.startDate}</li>
											<li><strong>Año de finalización: </strong>{study.endDate}</li>
											<li><strong>Descripción: </strong>{study.educationExtract}</li>
											<li>  </li>
										</ul>)
								}
							</div>
						</section>

						<section className="prev-professionalexperience">
							<h2 className="prev-titles">Formación profesional</h2><hr/>
							<div className="prev-jobdetails">
								{
									this.props.jobArr.map((job,i) =>
										<ul key={i}>
											<li><strong>Puesto de trabajo: </strong>{job.job}</li>
											<li><strong>Cargo: </strong>{job.jobCharge}</li>
											<li><strong>Empresa: </strong>{job.jobBussines}</li>
											<li><strong>Fecha de inicio: </strong>{job.startDate}</li>
											<li><strong>Fecha de fin: </strong>{job.endDate}</li>
											<li><strong>Descripción del cargo: </strong>{job.jobExtract}</li>
											<li>  </li>
										</ul>)
								}
							</div>
						</section>
					</section>

					<section className="prev-info-extra color-base">
						<section className="prev-skills">
							<h2 className="prev-titles">Habilidades</h2><hr/>
							<ul className="box-skills">
								<li className="skill1">
									<p className="skill-name"></p>
									<div className="progress-bar hidden">
										<div className="progress-bar__item">
										</div>
									</div>
								</li>
							</ul>
						</section>

						<section className="prev-interestdetails">
							<h2 className="prev-titles">Otros datos de interés</h2><hr/>
							<p className="prev-other">{this.props.other}</p>
						</section>
					</section>
				</div>
			</section>
);
}

}

Preview.defaultProps = {
	name: "Nombre",
	surnames: "Apellidos",
	email: "email",
	phone: "Teléfono",
	address: "Dirección",
	profession: "Profesión",
	twitter: "twitter",
	linkedin: "linkedin",
	summary: "Extracto",
	other: ""
}

export default Preview;
