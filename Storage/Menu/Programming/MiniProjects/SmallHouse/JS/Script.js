$(document).ready(function() {
	$('.ShadowBox').hover(function(event) {
		$('.Shadow0,.Shadow1,.Shadow2,.Shadow3,.Shadow1P1,.Shadow2P1,.Shadow2P2').toggleClass('Act');
		$('.Liniya').toggleClass('Act');
		$('.BoxColor').toggleClass('Act');
	});
});