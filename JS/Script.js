$(document).ready(function() {
	$('.Xr').click(function(event) {
		$('.boxI,.inf,.Inform').addClass('ActXr');
	});
});



$(document).ready(function() {
	$('.LustBox').click(function(event) {
		$('.Levo,.LustBox,.Lust,.PL,.Inform').toggleClass('Act1');
	});
});
$(document).ready(function() {
	$('.SestBox').click(function(event) {
		$('.Pravo,.SestBox,.Sest,.PL,.Inform').toggleClass('Act2');
	});
});



$(document).ready(function() {
	$('.M').click(function(event) {
		$('.r154,.C310,.C320,.KoloHeader').toggleClass('ActM');
	});
});
$(document).ready(function() {
	$('.M').click(function(event) {
		$('.R1wh,.r1,.M').toggleClass('r1pk');
	});
});
$(document).ready(function() {
	$('.M').click(function(event) {
		$('.R2wh').toggleClass('r2pk');
	});
});
$(document).ready(function() {
	$('.M').click(function(event) {
		$('.r34').toggleClass('r34A');
	});
});
$(document).ready(function() {
	$('.M').click(function(event) {
		$('.K21,.K22,.K23,.K24,.K25').toggleClass('K0');
	});
});



$(document).ready(function() {
	$('.K24').click(function(event) {
		$('.r154').toggleClass('r154p');
	});
});


$(document).ready(function() {
	$('.K21').click(function(event) {
		$('.C21,.C22,.C23,.C24,.C25').toggleClass('Act2K21');
	});
});
$(document).ready(function() {
	$('.K22').click(function(event) {
		$('.C21,.C22,.C23,.C24,.C25').toggleClass('Act2K22');
	});
});
$(document).ready(function() {
	$('.K23').click(function(event) {
		$('.C21,.C22,.C23,.C24,.C25').toggleClass('Act2K23');
	});
});
$(document).ready(function() {
	$('.K24').click(function(event) {
		$('.C21,.C22,.C23,.C24,.C25').toggleClass('Act2K24');
	});
});
$(document).ready(function() {
	$('.K25').click(function(event) {
		$('.C21,.C22,.C23,.C24,.C25').toggleClass('Act2K25');
	});
});


$(document).ready(function() {
	$('.K21').click(function(event) {
		$('.K22,.K23,.K24,.K25').toggleClass('K0');
	});
});
$(document).ready(function() {
	$('.K21').click(function(event) {
		$('.K21').toggleClass('K21K1');
	});
});
$(document).ready(function() {
	$('.K22').click(function(event) {
		$('.K21,.K23,.K24,.K25').toggleClass('K0');
	});
});
$(document).ready(function() {
	$('.K22').click(function(event) {
		$('.K22').toggleClass('K22K2');
	});
});
$(document).ready(function() {
	$('.K23').click(function(event) {
		$('.K21,.K22,.K24,.K25').toggleClass('K0');
	});
});
$(document).ready(function() {
	$('.K24').click(function(event) {
		$('.K21,.K22,.K23,.K25').toggleClass('K0');
	});
});
$(document).ready(function() {
	$('.K24').click(function(event) {
		$('.K24').toggleClass('K24K4');
	});
});
$(document).ready(function() {
	$('.K25').click(function(event) {
		$('.K21,.K22,.K23,.K24').toggleClass('K0');
	});
});
$(document).ready(function() {
	$('.K25').click(function(event) {
		$('.K25').toggleClass('K25K5');
	});
});



$(document).ready(function() {
	$('.K21,.K22,.K23,.K24,.K25').click(function(event) {
		$('.C310').toggleClass('Act310');
	});
});
$(document).ready(function() {
	$('.K21,.K22,.K23,.K24,.K25').click(function(event) {
		$('.C320').toggleClass('Act320');
	});
});



$(document).ready(function() {
	$('.K21').click(function(event) {
		$('.ID31').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.K22').click(function(event) {
		$('.ID32').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.K23').click(function(event) {
		$('.ID33').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.K24').click(function(event) {
		$('.ID34').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.K25').click(function(event) {
		$('.ID35').toggleClass('Act');
	});
});


$(document).ready(function() {
	$('.IBoxTypeCurrentlyFotoBoxDop').hover(function(event) {
		$('.IBoxTypeCurrentlyFotoBoxDopStrelkaLiniya1,.IBoxTypeCurrentlyFotoBoxDopStrelkaLiniya2').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.IBoxTypeCurrentlyFotoBoxDop').click(function(event) {
		$('.IBoxTypeCurrentlyFotoBoxDop,.IBoxTypeCurrentlyFotoBoxDopStrelka1,.IBoxTypeCurrentlyFotoBoxDopStrelka2,.IBoxTypeCurrentlyFotoBoxDopStrelka3').toggleClass('Act');
		$('.IBoxType1Prob').toggleClass('ActProb');
	});
});

$(document).ready(function() {
	$('.TypeFoto').hover(function(event) {
		$('.TypeFoto,.KoloHeader').toggleClass('Act');
		$('.r154,.C310,.C320,.KoloHeader').toggleClass('ActM');
		$('.R1wh,.r1,.M').toggleClass('r1pk');
		$('.R2wh').toggleClass('r2pk');
		$('.r34').toggleClass('r34A');
		$('.K21,.K22,.K23,.K24,.K25').toggleClass('K0');
	});
});





$(document).ready(function() {
	$('.ActType1').click(function(event) {
		$('.r154,.C310,.C320,.KoloHeader').addClass('ActM');
		$('.R1wh,.r1,.M').addClass('r1pk');
		$('.R2wh').addClass('r2pk');
		$('.r34').addClass('r34A');
		$('.K21,.K22,.K23,.K24,.K25').addClass('K0');
		$('.Type1Foto2,.KoloHeader').addClass('Act');
		$('.IBoxType1BoxInformBoxID2,.IBoxTypeH2ID2').addClass('ActInfo');
		$('.Type1Foto2ID1,.Type1Foto2ID3').removeClass('DisNone');
	});
});

$(document).ready(function() {
	$('.InformDopSlou').click(function(event) {
		$('.Type1Foto2,.KoloHeader').removeClass('Act');
		$('.IBoxType1BoxInformBoxID2,.IBoxTypeH2ID2').removeClass('ActInfo');
		$('.Type1Foto2ID1,.Type1Foto2ID3').addClass('DisNone');
		$('.r154,.C310,.C320,.KoloHeader').removeClass('ActM');
		$('.R1wh,.r1,.M').removeClass('r1pk');
		$('.R2wh').removeClass('r2pk');
		$('.r34').removeClass('r34A');
		$('.K21,.K22,.K23,.K24,.K25').removeClass('K0');
		$('.Type1Foto2ID1,.Type1Foto2ID2,.Type1Foto2ID3').removeClass('Left');
		$('.Type1Foto2ID1,.Type1Foto2ID2,.Type1Foto2ID3').removeClass('Right');
	});
});


$(document).ready(function() {
	$('.Type1Foto2ID1').click(function(event) {
		$('.Type1Foto2ID1,.Type1Foto2ID2,.Type1Foto2ID3').addClass('Right');
		$('.Type1Foto2ID1').addClass('Right');
	});
});
$(document).ready(function() {
	$('.Type1Foto2ID2').click(function(event) {
		$('.Type1Foto2ID1,.Type1Foto2ID2,.Type1Foto2ID3').removeClass('Right');
	});
});

$(document).ready(function() {
	$('.Type1Foto2ID3').click(function(event) {
		$('.Type1Foto2ID1,.Type1Foto2ID2,.Type1Foto2ID3').addClass('Left');
	});
});
$(document).ready(function() {
	$('.Type1Foto2ID2').click(function(event) {
		$('.Type1Foto2ID1,.Type1Foto2ID2,.Type1Foto2ID3').removeClass('Left');
	});
});


