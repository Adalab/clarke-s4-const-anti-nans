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
                        <div className="progress-bar__item">
												</div>
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

    );
  }
}

export default Preview;
