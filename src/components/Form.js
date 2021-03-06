import React, { Component } from 'react';
import Avatar from './Avatar';

class Form extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleJob = this.handleJob.bind(this);
		this.handleStudy = this.handleStudy.bind(this);
		this.handleAddJob = this.handleAddJob.bind(this);
		this.handleAddStudy = this.handleAddStudy.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.toggleContentStyle = this.toggleContentStyle.bind(this);
		this.toggleContentPersonal = this.toggleContentPersonal.bind(this);
		this.toggleContentJob = this.toggleContentJob.bind(this);
		this.toggleContentStudy = this.toggleContentStudy.bind(this);
		this.toggleContentSkills = this.toggleContentSkills.bind(this);
		this.toggleContentOther = this.toggleContentOther.bind(this);

		this.state = {
			job: {
				job: " ",
				jobCharge: " ",
				jobBusiness: " ",
				monthInit: " ",
				monthEnd: " ",
				yearInit: " ",
				yearEnd: " "
			},
			study:{
				educationStudies: " ",
				educationInstitution: " ",
				typeStudies: " ",
				educationExtract: " ",
				yearInit: " ",
				yearEnd: " "
			},
			styleVisible: false,
			personalVisible: false,
			jobVisible: false,
			studyVisible: false,
			skillsVisible: false,
			otherVisible: false
		}
	}

	toggleContentStyle() {
		this.setState(
			(prevState, props) => ({styleVisible: !prevState.styleVisible})
		);
	}
	toggleContentPersonal() {
		this.setState(
			(prevState, props) => ({personalVisible: !prevState.personalVisible})
		);
	}
	toggleContentJob() {
		this.setState(
			(prevState, props) => ({jobVisible: !prevState.jobVisible})
		);
	}
	toggleContentStudy() {
		this.setState(
			(prevState, props) => ({studyVisible: !prevState.studyVisible})
		);
	}
	toggleContentSkills() {
		this.setState(
			(prevState, props) => ({skillsVisible: !prevState.skillsVisible})
		);
	}
	toggleContentOther() {
		this.setState(
			(prevState, props) => ({otherVisible: !prevState.otherVisible})
		);
	}
	handleChange(event){
		this.props.updatePreview(event.target.name, event.target.value);
	}

	handleJob(event){
		this.setState({
			job:{
				job: this.refs.job.value,
				jobCharge: this.refs.jobCharge.value,
				jobBussines: this.refs.jobBussines.value,
				jobExtract: this.refs.jobExtract.value,
				monthInit: this.refs.monthInit.value,
				monthEnd: this.refs.monthEnd.value,
				yearInit: this.refs.yearInit.value,
				yearEnd: this.refs.yearEnd.value
			},
		});
	}

	handleStudy(event){
		this.setState({
			study:{
				educationStudies: this.refs.educationStudies.value,
				educationInstitution: this.refs.educationInstitution.value,
				typeStudies: this.refs.typeStudies.value,
				educationExtract: this.refs.educationExtract.value,
				yearInit: this.refs.yearInit.value,
				yearEnd: this.refs.yearEnd.value
			}
		});
	}

	handleAddJob(event){
		let job = this.state.job
		this.props.updateJobsPreview(job);
	}
	handleAddStudy(event){
		let study = this.state.study
		this.props.updateStudyPreview(study);
	}

	selectYears() {
		let years = [];
		let actual = <option></option>;
		years.push (actual);
		for (let i = 1950; i <= 2018; i++) {
			if (i === 1990){
				years.push(<option key={i} value={i} selected="selected">{i} </option>);
			}
			else{
				years.push(<option key={i} value={i}>{i}</option>);
			}
		}
		return years;
	}

	selectMonths() {
		let month = [];
		let actual = <option></option>;
		month.push (actual);
		for (let i = 1; i <= 12; i++) {
			if (i === 1){
				month.push(<option key={i} value={i} selected="selected">{i} </option>);
			}
			else{
				month.push(<option key={i} value={i}>{i}</option>);
			}
		}
		return month;
	}
	handleSubmit(e) {
		e.preventDefault();
	}

	handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.props.updatePreview("file", file);
			this.props.updatePreview("imagePreviewUrl", reader.result);
		}

		reader.readAsDataURL(file)
	}

	render() {
		return (
			<section className="forms">
				<form id="personsaldetails-content" method="post" className="total-form" enctype="multipart/form-data">
					<fieldset className="section">
						<legend className="openMenu" onClick={this.toggleContentStyle}>Elige estilos
							<span className="btnSection btnStyles"></span>
						</legend>
						{this.state.styleVisible?

							<div id="select-styles" className="boxfield hidden" >
								<div className="select-color">
									<h2>Selecciona tus colores</h2>
									<ul className="colors">
										<li>
											<input className="color_option color-1" type="button" data-theme-className="theme1"/>
										</li>
										<li>
											<input className="color_option color-2" type="button" data-theme-className="theme2"/>
										</li>
										<li>
											<input className="color_option color-3" type="button" data-theme-className="theme3"/>
										</li>
									</ul>
								</div>
								<div className="select-font">
									<h2>Selecciona tu fuente</h2>
									<ul className="fonts">
										<li>
											<input className="font_option font-1" type="button" data-font-className="font1"/>
										</li>
										<li>
											<input className="font_option font-2" type="button" data-font-className="font2"/>
										</li>
										<li>
											<input className="font_option font-3" type="button" data-font-className="font3"/>
										</li>
									</ul>
								</div>
								<div className="input-form-buttoms">
								</div>
							</div>
						:
							null
						}
					</fieldset>
					<fieldset className="section">
						<legend className="openMenu" onClick={this.toggleContentPersonal}  >Datos personales
							<span className="btnSection btnPersonalData"></span>
						</legend>

						{this.state.personalVisible?
							<div id="personal-data" className="boxfield hidden">
								<div className="input-form photo">
									<label for="photo">Introduce tu foto</label>
									<input className="picture"
										type="file"
										onChange={(e)=>this.handleImageChange(e)} />
								</div>
								<div className="input-form">
									<label for="name">Nombre*</label>
									<input onChange={this.handleChange} id="name" type="text" name="name" required className="personal-fields" maxlength="55"/>
								</div>
								<div className="input-form">
									<label for="surnames">Apellidos*</label>
									<input onChange={this.handleChange} id="surnames" type="text" name="surnames" required className="personal-fields" maxlength="55"/>
								</div>
								<div className="input-form">
									<label for="email">Email*</label>
									<input onChange={this.handleChange} id="email" type="email" name="email" required className="personal-fields" maxlength="55"/>
								</div>
								<div className="input-form">
									<label for="phone">Teléfono</label>
									<input onChange={this.handleChange} id="phone" type="tel" name="phone" className="personal-fields" maxlength="55"/>
								</div>
								<div className="input-form">
									<label for="address">Dirección</label>
									<input onChange={this.handleChange} id="address" type="text" name="address" className="personal-fields" maxlength="55"/>
								</div>
								<div className="input-form">
									<label for="profession">Profesión*</label>
									<input onChange={this.handleChange} id="profession" type="text" name="profession" required className="personal-fields" maxlength="55"/>
								</div>
								<div className="input-form networks">
									<p className="socialNetworks">Redes sociales</p>
									<div className="twitterNetwork">
										<span className="twitterLogo"></span>
										<label for="twitter">Twitter</label>
										<input onChange={this.handleChange} id="twitter" type="text" name="twitter" className="personal-fields" maxlength="55"/>
									</div>
									<div className="linkedinNetwork">
										<span className="linkedinLogo"></span>
										<label for="linkedin">LinkedIn</label>
										<input onChange={this.handleChange} className="linkedin personal-fields" id="linkedin" type="url" name="linkedin"/>
									</div>
								</div>
								<div className="input-form">
									<label for="summary">Extracto</label>
									<textarea onChange={this.handleChange} id="summary" name="summary" rows="6" cols="40" className="personal-fields"></textarea>
								</div>
								<div className="input-form-buttoms">
									<input type="reset" name="delete" value="Borrar"/>
									<input type="button" name="save" value="Guardar" className="save-personal"/>
								</div>
							</div>
						:
							null
						}
					</fieldset>
					<fieldset id="jobfiel" className="section">
						<legend className="openMenu" onClick={this.toggleContentJob} >Experiencia Laboral
							<span className="btnSection btnJob"></span>
						</legend>

						{this.state.jobVisible?
							<div id="job-data" className="boxfield hidden">
								<div className="input-form">
									<label for="job">Puesto de trabajo</label>
									<input onChange={this.handleJob} ref="job" id="job" type="text" name="job" className="job-fields"/>
								</div>
								<div className="input-form">
									<label for="job-charge">Cargo:</label>
									<input onChange={this.handleJob} ref="jobCharge" id="jobCharge" type="text" name="job-charge" className="job-fields"/>
								</div>
								<div className="input-form">
									<label for="job-bussines">Empresa:</label>
									<input onChange={this.handleJob} ref="jobBussines" id="jobBussines" type="text" name="job-bussines" className="job-fields"/>
								</div>
								<div className="input-form date">
									<div className="input-form initialmonth">
										<label for="job-month-start">Mes de inicio</label>
										<select onClick={this.handleJob} ref="monthInit" id="job-month-start" name="job-month-start" className="month job-fields">{this.selectMonths()}</select>
									</div>
									<div className="input-form initialyear">
										<label for="job-year-start">Año de inicio</label>
										<select onClick={this.handleJob} ref="yearInit" id="job-year-start" name="job-year-start" className="years job-fields">{this.selectYears()}</select>
									</div>
								</div>
								<div className="input-form date">
									<div className="input-form finalmonth">
										<label for="job-month-end">Mes de final</label>
										<select onClick={this.handleJob} ref="monthEnd"id="job-month-end" name="job-month-end" className="month job-fields">{this.selectMonths()}</select>
									</div>
									<div className="input-form finalyear">
										<label for="job-year-end">Año de final</label>
										<select onClick={this.handleJob} ref="yearEnd" id="job-year-end" name="job-year-end" className="years job-fields">{this.selectYears()}</select>
									</div>
								</div>
								<div className="input-form">
									<label for="job-extract">Descripción del cargo</label>
									<textarea onChange={this.handleJob} ref="jobExtract" id="jobExtract" name="job-extract" rows="6" cols="40" className="job-fields"></textarea>
								</div>
								<div className="input-form-buttoms">
									<input type="button" name="add" onClick={this.handleAddJob } className="add-job" value="Añadir"/>
								</div>
							</div>
						:
							null
						}
					</fieldset>
					<fieldset id="edufiel" className="section">
						<legend className="openMenu" onClick={this.toggleContentStudy}>Educación
							<span className="btnSection btnEducation"></span>
						</legend>

						{this.state.studyVisible?
							<div id="education-data" className="boxfield hidden">
								<div className="input-form">
									<label for="education-studies">Titulación</label>
									<input onChange={this.handleStudy} ref="educationStudies" id="educationStudies" type="text" name="education-studies" required className="edu-fields"/>
								</div>
								<div className="input-form">
									<label for="education-type-studies">Tipo de estudios</label>
									<select onClick={this.handleStudy} ref="typeStudies" id="education-type-studies" name="education-type-studies" className="type-studies edu-fields">
										<option value="">Seleciona estudio</option>
										<option value="Sin estudios obligados">Sin estudios obligados</option>
										<option value="ESO">ESO</option>
										<option value="FP Básica">FP Básica</option>
										<option value="FP Media">FP Media</option>
										<option value="FP Superior">FP Superior</option>
										<option value="Estudios Universitarios">Estudios Universitarios</option>
										<option value="Postgrado">Postgrado</option>
										<option value="Estudios sin convalidar">Estudios sin convalidar</option>
									</select>
								</div>
								<div className="input-form">
									<label for="education-institution">Centro de estudios</label>
									<input onChange={this.handleStudy} ref="educationInstitution" id="educationInstitution" type="text"  name="education-institution" required className="edu-fields"/>
								</div>
								<div className="input-form date">
									<div className="input-form initialyear">
										<label for="education-year-start">Año de inicio</label>
										<select onClick={this.handleStudy} ref="yearInit" id="education-year-start" name="education-year-start" className="years edu-fields-start">{this.selectYears()}</select>
									</div>
									<div className="input-form finalyear">
										<label for="education-year-end">Año de finalización</label>
										<select onClick={this.handleStudy} ref="yearEnd" id="education-year-end" name="education-year-end" className="years edu-fields-end">{this.selectYears()}</select>
									</div>
								</div>
								<div className="input-form">
									<label for="education-extract">Descripción</label>
									<textarea onChange={this.handleStudy} ref="educationExtract" id="educationExtract" name="education-extract" rows="6" cols="40" className="edu-fields"></textarea>
								</div>
								<div className="input-form-buttoms">
									<input type="button" name="add" onClick={this.handleAddStudy } value="Añadir" className="add-edu"/>
								</div>
							</div>
						:
							null
						}
					</fieldset>
					<fieldset id="skillsfiel" className="section">
						<legend className="openMenu" onClick={this.toggleContentSkills}>Habilidades <span className="btnSection btnSkills"></span>
						</legend>

						{this.state.skillsVisible?
							<div id="skills-data" className="boxfield hidden">

								<div className="input-form skills">
									<label for="skillstext">Habilidad</label>
									<input id="skillstext" type="text" name="skillstext" className="skillstext"/>
									<label for="percentage">Porcentaje</label>
									<input id="percentage" type="number" name="porcentaje" min="1" max="100"/>
								</div>
								<div className="input-form-buttoms">
									<input type="reset" name="delete" value="Borrar"/>
									<input id="plus" type="button" name="add" value="Añadir"/>
								</div>
							</div>
						:
							null
						}
					</fieldset>
					<fieldset id="otherdetfiel" className="section">
						<legend className="openMenu" onClick={this.toggleContentOther}>Otros datos de interés
							<span className="btnSection btnOtherDetails"></span>
						</legend>

						{this.state.otherVisible?
							<div id="other-data" className="boxfield hidden">
								<div className="input-form">
									<label for="details">Datos de interés</label>
									<input id="details" type="text" name="other" className="other-fields" onChange={this.handleChange}/>
								</div>
							</div>
						:
							null
						}
					</fieldset>
				</form>
			</section>

);
}
}

export default Form;
