import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <body className="body">

        <header id="header" className="header">
          <div className="logo-cabecera">
            <a href="index.html"><img src="src/images/logo.png" alt="logo-equipo"/></a>
          </div>
          <nav>
            <ul className="menu">
              <li>
                <a href="http://www.twitter.com/share?url=https://adalab.github.io/clarke-s2-nan" target="_blank"/><img className="compartir" src="src/images/compartir2.png" alt="compartir"/>
              </li>

              <li>
                <img className="preview" src="src/images/preview1.svg" alt="vista previa"/>
              </li>
              <li>
                <img className="print" src="src/images/print.svg" alt="icono imprimir"/>
              </li>
              <li>
                <a className="link-aboutus" href="about-us.html">
                  <img className="aboutus" src="src/images/aboutus.svg" alt="about us"/>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main id="principal-content" className="principal-content">
          <h1 className="principal-title">Crea tu propio CV</h1>
          <section className="personalizatucv">
            <ul className="personalizar">
              <li className="perscolor">
                <div>
                  <img src="src/images/paleta.png" alt="paleta"/>
                </div>
                <div><p>Paso 1: Elige el color</p>
                </div>
              </li>
              <li className="persfuente">
                <div>
                  <img src="src/images/fuente.png" alt="fuente"/>
                </div>
                <div>
                  <p>Paso 2: Elige la fuente</p>
                </div>
              </li>
              <li className="persestilo">
                <div>
                  <img src="src/images/escribe.svg" className="lapiz" alt="lapiz"/>
                </div>
                <div><p>Paso 3: Rellena tus datos</p>
                </div>
              </li>
            </ul>
          </section>
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
                    <input id="name" type="text" name="name" required className="personal-fields" maxlength="55"/>
                  </div>
                  <div className="input-form">
                    <label for="surnames">Apellidos*</label>
                    <input id="surnames" type="text" name="surnames" required className="personal-fields" maxlength="55"/>
                  </div>
                  <div className="input-form">
                    <label for="email">Email*</label>
                    <input id="email" type="email" name="email" required className="personal-fields" maxlength="55"/>
                  </div>
                  <div className="input-form">
                    <label for="phone">Teléfono</label>
                    <input id="phone" type="tel" name="phone" className="personal-fields" maxlength="55"/>
                  </div>
                  <div className="input-form">
                    <label for="address">Dirección</label>
                    <input id="address" type="text" name="address" className="personal-fields" maxlength="55"/>
                  </div>
                  <div className="input-form">
                    <label for="profession">Profesión*</label>
                    <input id="profession" type="text" name="profession" required className="personal-fields" maxlength="55"/>
                  </div>
                  <div className="input-form networks">
                    <p className="socialNetworks">Redes sociales</p>
                    <div className="twitterNetwork">
                      <span className="twitterLogo"></span>
                      <label for="twitter">Twitter</label>
                      <input id="twitter" type="text" name="twitter" className="personal-fields" maxlength="55"/>
                    </div>
                    <div className="linkedinNetwork">
                      <span className="linkedinLogo"></span>
                      <label for="linkedin">LinkedIn</label>
                      <input className="linkedin personal-fields" id="linkedin" type="url" name="linkedin"/>
                    </div>
                  </div>
                  <div className="input-form">
                    <label for="summary">Extracto</label>
                    <textarea id="summary" name="comments" rows="6" cols="40" className="personal-fields"></textarea>
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
                    <input id="details" type="text" name="details" className="other-fields"/>
                  </div>

                  <div className="input-form-buttoms">

                    <input type="reset" name="delete" value="Borrar" className="delete"/>
                    <input type="button" name="add" value="Añadir" className="add-detail"/>
                  </div>
                </div>
              </fieldset>
            </form>
          </section>

          <section id="printcv" className="cv type-font">
            <section className="prev-info-personaldates prev-contact color-lateral">
              <h1 className="prev-titles">Datos de contacto</h1>
              <div className="prev-photo prev-personalcontent">
                <img src="src/images/background1.jpeg" alt="Foto Personal" width="120" height="120" id="foto"/>
              </div>
              <ul className="prev-list-personal">
                <li id="nombre" className="prev-contactdetails ">Nombre</li>
                <li id="apellidos" className="prev-contactdetails">Apellidos</li>
                <li id="profesion" className="prev-contactdetails">Profesión</li>
                <li id="direccion" className="prev-contactdetails"></li>
                <li id="mail" className="prev-contactdetails cut-url">ejemplo@gmail.com</li>
                <li id="telefono" className="prev-contactdetails">666998811</li>
                <li className="prev-contactdetails cut-url">Twitter</li>
                <li className="prev-contactdetails cut-url">Linkedin</li>
              </ul>
            </section>
            <section className="prev-description">
              <h2 className="prev-titles">Extracto</h2><hr/>
              <p id="resumen" className="prev-contactdetails">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
            </section>
            <div className="prev-content">
              <section className="prev-info-experience">
                <section className="prev-education">
                  <h2 className="prev-titles">Formación académica</h2><hr/>
                  <ul className="prev-educationdetails">

                  </ul>
                </section>

                <section className="prev-professionalexperience">
                  <h2 className="prev-titles">Formación profesional</h2><hr/>
                  <ul className="prev-jobdetails">

                  </ul>
                </section>
              </section>
              <section className="prev-info-extra color-base">
                <section className="prev-skills">
                  <h2 className="prev-titles">Habilidades</h2><hr/>
                  <ul className="box-skills">
                    <li className="skill1">
                      <p className="skill-name"></p>
                      <div className="progress-bar hidden">
                        <div className="progress-bar__item"></div>
                      </div>
                    </li>
                  </ul>
                </section>

                <section className="prev-interestdetails">
                  <h2 className="prev-titles">Otros datos de interés</h2><hr/><p className="prev-other"></p>
                </section>
              </section>
            </div>
          </section>
        </main>
        <footer className="footer">
          <p className="copy">Copyright &copy;NaN!</p>
          <div className="up-button"><a href="#principal-content">up-button</a>
          </div>
        </footer>
      </body>
      </div>
    );
  }
}

export default App;
