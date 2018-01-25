	'use strict';
//MENU DESPLEGABLE
const buttonLegend = document.querySelectorAll('.openMenu');//array de legends
const sectionForm = document.querySelectorAll('.boxfield');//array de boxfields
const selectYear = document.querySelectorAll('.years');
const selectMonth = document.querySelectorAll('.month');

//Desplegables OK
const desplegarPlegar = (event) => {
	let boxfieldContent = event.currentTarget.nextElementSibling;
	boxfieldContent.classList.toggle('hidden');
	const iconLegend = event.currentTarget.querySelector('.btnSection');
	iconLegend.classList.toggle('btnMinus');
}

for (const displayForm of buttonLegend) {
	displayForm.addEventListener('click', desplegarPlegar);
}

//Select years OK
const list = (firstyear, totalyears) => {
	let options = '';
	for (let i = (totalyears + firstyear); i >= 0; i--){
		if (i === 2018){
			options = options + '<option value="' + (i) + '" selected>'+(i)+'</option>';
		}else{
			options = options + '<option value="' + (i) + '">'+(i)+'</option>';
		}
	}
	return options;
}
//Añadir años a los select OK
for (const addYears of selectYear){
	addYears.innerHTML=list(1950,100);
}

//Añadir meses a los select OK
const listMonth = (firstmonth, totalmonth) => {
	let options = '';
	for (let i = 1; i <= 12; i++){
		options = options + '<option value="' + (i) + '" selected>'+(i)+'</option>';
	}
	return options;
}
for (const addYears of selectMonth){
	addYears.innerHTML=listMonth(0,12);

}


//Seleccionar estudios OK
let studyOptions = '';
studyOptions = studyOptions + '<option value="">Seleciona estudio</option>';
studyOptions = studyOptions + '<option value="Sin estudios">Sin estudios obligados</option>';
studyOptions = studyOptions + '<option value="Eso">ESO</option>';
studyOptions = studyOptions + '<option value="FPBasica">FP Básica</option>';
studyOptions = studyOptions + '<option value="FPMedia">FP Media</option>';
studyOptions = studyOptions + '<option value="FPSuperior">FP Superior</option>';
studyOptions = studyOptions + '<option value="Uni">Estudios universitarios</option>';
studyOptions = studyOptions + '<option value="Postgrado">Postgrado</option>';
studyOptions = studyOptions + '<option value="Estudios sin convalidar">Estudios sin convalidar</option>';

document.querySelector('.type-studies').innerHTML = studyOptions;

//Rellenar Barras Habilidades OK
let pb = document.querySelector('.progress-bar__item');

//foto
const archivo = (evt) => {
	let files = evt.target.files; // FileList object
	//Obtenemos la imagen del campo "file".
	for (let i = 0, f; f = files[i]; i++) {
		//Solo admitimos imágenes.
		if (!f.type.match('image.*')) {
			continue;
		}
		let reader = new FileReader();
		reader.onload = (function(theFile) {
			return function(e) {
				// Creamos la imagen.
				document.querySelector(".prev-photo").innerHTML = ['<img class="thumb" width="120" height="120" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
			};
		})(f);
		reader.readAsDataURL(f);
	}
}

//Upload profile picture
let picButton = document.querySelector('.picture');
picButton.addEventListener('change',archivo);
