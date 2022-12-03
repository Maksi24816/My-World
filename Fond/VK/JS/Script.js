//Вкл. Блок

$(document).ready(function() {
	$('.TelefonID').click(function(event) {
		$('.SMSMenu,.TelefonIDFoto').addClass('Act');
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
		$('.Box,.HeaderGran').addClass('Hidden1');
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
		$('.SMSMenu,.TelefonIDFoto').removeClass('Act');
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
		$('.Box,.HeaderGran').removeClass('Hidden1');
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
	$('.Box,.I20A,.I19A,.Nine1,.HeaderOsnBro,.VKA,.HeaderGranVukl').click(function(event) {
		$('.PpBox').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.Nine1').click(function(event) {
		$('.Nine1Box').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I20A,.I19A,.Pp,.HeaderOsnBro,.VKA,.HeaderGranVukl').click(function(event) {
		$('.Nine1Box').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.HeaderOsnBro').click(function(event) {
		$('.HeaderOsnBroBox').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I20A,.I19A,.Pp,.Nine1,.VKA,.HeaderGranVukl').click(function(event) {
		$('.HeaderOsnBroBox').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.I19A').click(function(event) {
		$('.I19Box').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I20A,.Pp,.Nine1,.VKA,.HeaderGranVukl,.HeaderOsnBro').click(function(event) {
		$('.I19Box').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.I20A').click(function(event) {
		$('.I20Box').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I19A,.Pp,.Nine1,.VKA,.HeaderGranVukl,.HeaderOsnBro').click(function(event) {
		$('.I20Box').removeClass('Act');
	});
});



$(document).ready(function() {
	$('.Bil2').hover(function(event) {
		$('.Bil2Box').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Bil2Box').hover(function(event) {
		$('.Bil2Box').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.SMSID').hover(function(event) {
		$('.TelefonIDBox').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.TelefonIDBox').hover(function(event) {
		$('.TelefonIDBox').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.YouPidp').hover(function(event) {
		$('.YouPidpBox').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.YouPidpBox').hover(function(event) {
		$('.YouPidpBox').addClass('Act');
	});
});
$(document).ready(function() {
	$('.Face').hover(function(event) {
		$('.YouPidpBox').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.CnopkaM').click(function(event) {
		$('.CnopkaF,.CnopkaM,.CnopkaFText,.CnopkaMText,.FKMS,.HeartF,.HeartM').addClass('Act');
	});
});
$(document).ready(function() {
	$('.CnopkaM').click(function(event) {
		$('.FotoFoto11,.FotoFoto22,.FotoFoto12,.FotoFoto21').addClass('Act');
	});
});
$(document).ready(function() {
	$('.CnopkaF').click(function(event) {
		$('.CnopkaF,.CnopkaM,.CnopkaFText,.CnopkaMText,.FKMS,.HeartF,.HeartM').removeClass('Act');
	});
});
$(document).ready(function() {
	$('.CnopkaF').click(function(event) {
		$('.FotoFoto11,.FotoFoto22,.FotoFoto12,.FotoFoto21').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.I19').hover(function(event) {
		$('.I19,.I19A').addClass('Act');
	});
});
$(document).ready(function() {
	$('.HeaderGranVukl').hover(function(event) {
		$('.I19,.I19A').removeClass('Act');
	});
});
$(document).ready(function() {
	$('.I20').hover(function(event) {
		$('.I20,.I20A').addClass('Act');
	});
});
$(document).ready(function() {
	$('.HeaderGranVukl').hover(function(event) {
		$('.I20,.I20A').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.DDD').click(function(event) {
		$('.DDD,.YouPidp').addClass('Act');
	});
});

$(document).ready(function() {
	$('.YouPidpBox').click(function(event) {
		$('.DDD,.YouPidp,.YouPidpBox').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.HeartMMusic1').hover(function(event) {
		$('.HeartMMusicFoto1,.HeartMMusicFoto2').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.NowsSMidMusic').hover(function(event) {
		$('.NowsSMidMusicText,.NowsSMidMusicFoto').toggleClass('Act');
	});
});