//Вкл. Блок

$(document).ready(function() {
	$('.TelefonID').click(function(event) {
		$('.SMSMenu').addClass('Act');
	});
});
$(document).ready(function() {
	$('.Dok').click(function(event) {
		$('.DokInfo').addClass('Act');
	});
});

//Вкл. Закон для Бокса

$(document).ready(function() {
	$('.TelefonID').click(function(event) {
		$('.Box').addClass('Hidden1');
	});
});
$(document).ready(function() {
	$('.Dok').click(function(event) {
		$('.Box').addClass('Fixed1');
	});
});

//Викл. Блок

$(document).ready(function() {
	$('.SMSMenuFonNowPoXrestBox,.SMSMenuBlock').click(function(event) {
		$('.SMSMenu').removeClass('Act');
	});
});
$(document).ready(function() {
	$('.SMSMenuFonNowPoXrestBox,.DokInfoBlock').click(function(event) {
		$('.DokInfo').removeClass('Act');
	});
});


//Викл. Закон для Бокса

$(document).ready(function() {
	$('.SMSMenuFonNowPoXrestBox,.SMSMenuBlock').click(function(event) {
		$('.Box').removeClass('Hidden1');
	});
});
$(document).ready(function() {
	$('.SMSMenuFonNowPoXrestBox,.DokInfoBlock').click(function(event) {
		$('.Box').removeClass('Fixed1');
	});
});


$(document).ready(function() {
	$('.SMSMenuFonNowPoXrestBox').hover(function(event) {
		$('.SMSMenuFonNowPoXrest1,.SMSMenuFonNowPoXrest2').toggleClass('Color');
	});
});





$(document).ready(function() {
	$('.Pp').click(function(event) {
		$('.PpBox').addClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I20,.I19,.Nine1,.HeaderOsnBro,.VKA,.HeaderGranVukl').click(function(event) {
		$('.PpBox').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.Nine1').click(function(event) {
		$('.Nine1Box').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I20,.I19,.Pp,.HeaderOsnBro,.VKA,.HeaderGranVukl').click(function(event) {
		$('.Nine1Box').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.HeaderOsnBro').click(function(event) {
		$('.HeaderOsnBroBox').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I20,.I19,.Pp,.Nine1,.VKA,.HeaderGranVukl').click(function(event) {
		$('.HeaderOsnBroBox').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.I19').click(function(event) {
		$('.I19Box').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I20,.Pp,.Nine1,.VKA,.HeaderGranVukl,.HeaderOsnBro').click(function(event) {
		$('.I19Box').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.I20').click(function(event) {
		$('.I20Box').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I19,.Pp,.Nine1,.VKA,.HeaderGranVukl,.HeaderOsnBro').click(function(event) {
		$('.I20Box').removeClass('Act');
	});
});