import React, { Component } from 'react';


class Form extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.props.updatePreview(event.target.name, event.target.value);
	}
  render() {
    return (
          <section className="forms">
            <form id="personsaldetails-content" method="post" className="total-form" enctype="multipart/form-data">
              <fieldset className="section">
                <legend className="openMenu">Elige estilos
                  <span className="btnSection btnStyles"></span>
                </legend>
                <div id="select-styles" className="boxfield hidden">
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
              </fieldset>
              <fieldset className="section">
                <legend className="openMenu">Datos personales
                  <span className="btnSection btnPersonalData"></span>
                </legend>
                <div id="personal-data" className="boxfield hidden">
                  <div className="input-form photo">
                    <label for="photo">Introduce tu foto</label>
                    <input id="files" type="file" name="files[]"  accept="image/*" className="picture"/>
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
              </fieldset>
              <fieldset id="jobfiel" className="section">
                <legend className="openMenu">Experiencia Laboral
                  <span className="btnSection btnJob"></span>
                </legend>

                <div id="job-data" className="boxfield hidden">
                  <div className="input-form">
                    <label for="job">Puesto de trabajo</label>
                    <input id="job" type="text" name="job" className="job-fields"/>
                  </div>
                  <div className="input-form">
                    <label for="job-charge">Cargo:</label>
                    <input id="job-charge" type="text" name="job-charge" className="job-fields"/>
                  </div>
                  <div className="input-form">
                    <label for="job-bussines">Empresa:</label>
                    <input id="job-bussines" type="text" name="job-bussines" className="job-fields"/>
                  </div>
                  <div className="input-form date">
                    <div className="input-form initialmonth">
                      <label for="job-month-start">Mes de inicio</label>
                      <select id="job-month-start" name="job-month-start" className="month job-fields"></select>
                    </div>
                    <div className="input-form initialyear">
                      <label for="job-year-start">Año de inicio</label>
                      <select id="job-year-start" name="job-year-start" className="years job-fields"></select>
                    </div>
                  </div>
                  <div className="input-form date">
                    <div className="input-form finalmonth">
                      <label for="job-month-end">Mes de final</label>
                      <select id="job-month-end" name="job-month-end" className="month job-fields"></select>
                    </div>
                    <div className="input-form finalyear">
                      <label for="job-year-end">Año de final</label>
                      <select id="job-year-end" name="job-year-end" className="years job-fields"></select>
                    </div>
                  </div>
                  <div className="input-form">
                    <label for="job-extract">Descripción del cargo</label>
                    <textarea id="job-extract" name="job-extract" rows="6" cols="40" className="job-fields"></textarea>
                  </div>
                  <div className="input-form-buttoms">
                    <input type="reset" name="delete" value="Borrar"/>
                    <input type="button" name="add" className="add-job"value="Añadir"/>
                    <input type="button" name="save" value="Guardar" className="save-job"/>
                  </div>
                </div>
              </fieldset>
              <fieldset id="edufiel" className="section">
                <legend className="openMenu">Educación
                  <span className="btnSection btnEducation"></span>
                </legend>
                <div id="education-data" className="boxfield hidden">
                  <div className="input-form">
                    <label for="education-studies">Titulación</label>
                    <input type="text" id="education-studies" name="education-studies" required className="edu-fields"/>
                  </div>
                  <div className="input-form">
                    <label for="education-type-studies">Tipo de estudios</label>
                    <select id="education-type-studies" name="education-type-studies" className="type-studies edu-fields">

                    </select>
                  </div>
                  <div className="input-form">
                    <label for="education-institution">Centro de estudios</label>
                    <input className="edu-fields" type="text" id="education-institution" name="education-institution" required/>
                  </div>
                  <div className="input-form date">
                    <div className="input-form initialyear">
                      <label for="education-year-start">Año de inicio</label>
                      <select id="education-year-start" name="education-year-start" className="years edu-fields-start">
                      </select>
                    </div>
                    <div className="input-form finalyear">
                      <label for="education-year-end">Año de finalización</label>
                      <select id="education-year-end" name="education-year-end" className="years edu-fields-end"></select>
                    </div>
                  </div>
                  <div className="input-form">
                    <label for="education-extract">Descripción</label>
                    <textarea id="education-extract" name="education-extract" rows="6" cols="40" className="edu-fields"></textarea>
                  </div>
                  <div className="input-form-buttoms">
                    <input type="reset" name="delete" value="Borrar"/>
                    <input type="button" name="add" value="Añadir" className="add-edu"/>
                  </div>
                </div>
              </fieldset>
              <fieldset id="skillsfiel" className="section">
                <legend className="openMenu">Habilidades <span className="btnSection btnSkills"></span>
                </legend>
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
              </fieldset>
							<fieldset id="otherdetfiel" className="section">
								<legend className="openMenu">Otros datos de interés
									<span className="btnSection btnOtherDetails"></span>
								</legend>
								<div id="other-data" className="boxfield hidden">
									<div className="input-form">
										<label for="details">Datos de interés</label>
										<input id="details" type="text" name="other" className="other-fields" onChange={this.handleChange}/>
									</div>

									{/* <div className="input-form-buttoms">

										<input type="reset" name="delete" value="Borrar" className="delete"/>
										<input type="button" name="add" value="Añadir" className="add-detail"/>
									</div>  */}
								</div>
							</fieldset>
						</form>
					</section>

    );
  }
}

export default Form;
