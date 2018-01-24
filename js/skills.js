'use strict';

const skill = document.querySelector('#skillstext');
const skillName = document.querySelector('.skill-name');
const percentage = document.querySelector('#percentage');
const progress = document.querySelector('.progress-bar__item');
const barNone = document.querySelector('.progress-bar');
const buttonAddSkills = document.querySelector('#plus');
const listSkill = document.querySelector('.skill1');
const buttonAddDetails = document.querySelector('.add-detail')


const saveNewSkill = () => {
	let addSkill = `
		<li class="skill1">
			<p class="skill-name"> ${document.getElementById('skillstext').value}
			</p>
			<div class="progress-bar">
				<div class="progress-bar__item" style="width:${  document.getElementById('percentage').value}%;">
				</div>
			</div>
		</li>
	`;

	let newSkill =
	document.querySelector('.box-skills');
	newSkill.innerHTML += addSkill;
	document.getElementById('skillstext').value = '';
	document.getElementById('percentage').value = '';
	}

	const saveNewDetails = () => {
		let addDetail = `
			<li>${document.querySelector('.other-fields').value}
			</li>
		`;

		let newDetail =
		document.querySelector('.prev-other');
		newDetail.innerHTML += addDetail;
		document.getElementById('details').value = '';

		}

buttonAddSkills.addEventListener('click', saveNewSkill);
buttonAddDetails.addEventListener('click', saveNewDetails);
