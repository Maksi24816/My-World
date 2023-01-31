$(document).ready(function() {
	$('.ShadowBox').hover(function(event) {
		$('.Shadow0,.Shadow1,.Shadow2,.Shadow3,.Shadow1P1,.Shadow2P1,.Shadow2P2').addClass('Act');
		$('.Liniya').addClass('Act');
		$('.BoxColor').addClass('Act');
		$('.Color18,.Color18P,.Color3').addClass('Act');
		$('.Color11,.Color12,.Color13,.Color8P,.Color9P,.ID2,.ColoElem2').addClass('Act');
		$('.House').addClass('Act');
	});
});

$(document).ready(function() {
	$('.Leave').hover(function(event) {
		$('.Shadow0,.Shadow1,.Shadow2,.Shadow3,.Shadow1P1,.Shadow2P1,.Shadow2P2').removeClass('Act');
		$('.Liniya').removeClass('Act');
		$('.BoxColor').removeClass('Act');
		$('.Color18,Color18P,.Color3,.Liniya').removeClass('Act');
		$('.Color11,.Color12,.Color13,.Color8P,.Color9P,.ID2,.ColoElem2').removeClass('Act');
		$('.House').removeClass('Act');
	});
});