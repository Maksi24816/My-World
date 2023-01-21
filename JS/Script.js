
$(document).ready(function() {
	$('.Info_Xrest').click(function(event) {
		$('body').addClass('Act');
        $('.Info_Box').addClass('Act');
		$('.Menu_LVL0,.Menu_Background,.Menu_LVL0_1,.Menu_LVL0_2,.Menu_LVL3,.Menu_LVL2,.Menu_LVL15,.Menu_LVL1,.Menu_Knopka').toggleClass('Act');
		$('.KnopkaLVL2_1,.KnopkaLVL2_2,.KnopkaLVL2_3,.KnopkaLVL2_4,.KnopkaLVL2_5').toggleClass('KnopkaLVL2_0');
	});
});