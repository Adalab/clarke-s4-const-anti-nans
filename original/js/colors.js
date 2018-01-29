'use strict';
/*CONSTANTS DECLARATION*/
const PREVIEW_LATERAL = document.querySelectorAll('.color-lateral');
const PREVIEW_FONT = document.querySelectorAll('.type-font');

/*VARIABLE DECLARATION*/
let fonts = document.querySelectorAll('.font_option');
let colors = document.querySelectorAll('.color_option');

/*SELECT COLOR*/
const cleanColorClasses = () => {
	for (let cleanPreview of PREVIEW_LATERAL){
		cleanPreview.classList.remove('theme1', 'theme2', 'theme3', 'color-base');
	}
}

const applyColorLateral = event => {
	cleanColorClasses();
	let themeClass = event.currentTarget.getAttribute('data-theme-class');
	for (let applycolorPreview of PREVIEW_LATERAL){
		applycolorPreview.classList.add(themeClass);
	}
}
for (let iColor of colors){
	iColor.addEventListener('click', applyColorLateral);
}

/*SELECT FONTS*/
const cleanFontClasses = () =>{
	for (let cleanFont of PREVIEW_FONT){
		cleanFont.classList.remove('font1', 'font2', 'font3');
	}
}

const applyFont = event =>{
	cleanFontClasses();
	let fontClass = event.currentTarget.getAttribute('data-font-class');
	for (let applyFont of PREVIEW_FONT){
		applyFont.classList.add(fontClass);
	}
}
for (let iFonts of fonts){
	iFonts.addEventListener('click', applyFont);
}

document.querySelector('.color_option').addEventListener('click', applyColorLateral);
document.querySelector('.font_option').addEventListener('click', applyFont);
