
const Bl = document.querySelector('.MenuDop_BL_Element0');
const Br = document.querySelector('.MenuDop_BR_Element0');

Bl.onclick = function () {
	const SMSBody = document.querySelector('.MenuDop_SMS_Body')
	const BLElement1 = document.querySelector('.MenuDop_BL_Element1')
	const BLElement2 = document.querySelector('.MenuDop_BL_Element2')

	SMSBody.classList.add('Act');
	BLElement1.classList.add('Act');
	BLElement2.classList.add('Act');
};

Br.onclick = function () {
	const SetingBody = document.querySelector('.MenuDop_Seting_Body')
	const BrElement1 = document.querySelector('.MenuDop_BR_Element1')
	const BrElement2 = document.querySelector('.MenuDop_BR_Element2')

	SetingBody.classList.add('Act');
	BrElement1.classList.add('Act');
	BrElement2.classList.add('Act');
};

const BlOFF = document.querySelector('.MenuDop_Leave-Left');
const BrOFF = document.querySelector('.MenuDop_Leave-Right');

BlOFF.onclick = function () {
	const SMSBody = document.querySelector('.MenuDop_SMS_Body')
	const BLElement1 = document.querySelector('.MenuDop_BL_Element1')
	const BLElement2 = document.querySelector('.MenuDop_BL_Element2')

	SMSBody.classList.remove('Act');
	BLElement1.classList.remove('Act');
	BLElement2.classList.remove('Act');
};

BrOFF.onclick = function () {
	const SetingBody = document.querySelector('.MenuDop_Seting_Body')
	const BrElement1 = document.querySelector('.MenuDop_BR_Element1')
	const BrElement2 = document.querySelector('.MenuDop_BR_Element2')

	SetingBody.classList.remove('Act');
	BrElement1.classList.remove('Act');
	BrElement2.classList.remove('Act');
};

////////////////////////////////////////////////////////////////////////////////

const Telefon = document.querySelector('.Copy_Telefon');

Telefon.onclick = () => {
	navigator.clipboard.writeText('+380 50 521 27 25');
};

const Gmail = document.querySelector('.Copy_Gmail');

Gmail.onclick = () => {
	navigator.clipboard.writeText('yakovchenkomaksym043@gmail.com');
};