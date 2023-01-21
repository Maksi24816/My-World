
$(document).ready(function() {
	$('.MenuDop_BL_Element0').click(function(event) {
		$('.MenuDop_SMS_Body,.MenuDop_BL_Element1,.MenuDop_BL_Element2').addClass('Act');
	});
});

$(document).ready(function() {
	$('.MenuDop_BR_Element0').click(function(event) {
		$('.MenuDop_Seting_Body,.MenuDop_BR_Element1,.MenuDop_BR_Element2').addClass('Act');
	});
});

$(document).ready(function() {
	$('.MenuDop_Leave-Left').click(function(event) {
		$('.MenuDop_SMS_Body,.MenuDop_BL_Element1,.MenuDop_BL_Element2').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.MenuDop_Leave-Right').click(function(event) {
		$('.MenuDop_Seting_Body,.MenuDop_BR_Element1,.MenuDop_BR_Element2').removeClass('Act');
	});
});

const Telefon = document.querySelector('.Copy_Telefon');

Telefon.onclick = () => {
	navigator.clipboard.writeText('+380 50 521 27 25');
};

const Gmail = document.querySelector('.Copy_Gmail');

Gmail.onclick = () => {
	navigator.clipboard.writeText('yakovchenkomaksym043@gmail.com');
};