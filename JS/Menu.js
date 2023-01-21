$(document).ready(function() {
	$('.KnopkaMenu').click(function(event) {
		$('.Menu_LVL0,.Menu_Background,.Menu_LVL0_1,.Menu_LVL0_2,.Menu_LVL3,.Menu_LVL2,.Menu_LVL15,.Menu_LVL1,.Menu_Knopka').toggleClass('Act');
		$('.KnopkaLVL2_1,.KnopkaLVL2_2,.KnopkaLVL2_3,.KnopkaLVL2_4,.KnopkaLVL2_5').toggleClass('KnopkaLVL2_0');
	});
});
$(document).ready(function() {
	$('.KnopkaLVL2_1').click(function(event) {
		$('.Menu_LVL2_1,.Menu_LVL2_2,.Menu_LVL2_3,.Menu_LVL2_4,.Menu_LVL2_5').toggleClass('Act2K21');
		$('.KnopkaLVL2_1').toggleClass('K21K1');
		$('.KnopkaLVL2_2,.KnopkaLVL2_3,.KnopkaLVL2_4,.KnopkaLVL2_5').toggleClass('KnopkaLVL2_0');
		$('.Menu_LVL15_1').toggleClass('Menu_LVL15_Act');
		$('.Menu_LVL3_1_1,.Menu_LVL3_1_2,.Menu_LVL3_1_3,.Menu_LVL3_1_4,.Menu_LVL3_1_5').toggleClass('Menu_LVL3_Act');
	});
});
$(document).ready(function() {
	$('.KnopkaLVL2_2').click(function(event) {
		$('.Menu_LVL2_1,.Menu_LVL2_2,.Menu_LVL2_3,.Menu_LVL2_4,.Menu_LVL2_5').toggleClass('Act2K22');
		$('.KnopkaLVL2_2').toggleClass('K22K2');
		$('.KnopkaLVL2_1,.KnopkaLVL2_3,.KnopkaLVL2_4,.KnopkaLVL2_5').toggleClass('KnopkaLVL2_0');
		$('.Menu_LVL15_2').toggleClass('Menu_LVL15_Act');
		$('.Menu_LVL3_2_1,.Menu_LVL3_2_2,.Menu_LVL3_2_3,.Menu_LVL3_2_4,.Menu_LVL3_2_5').toggleClass('Menu_LVL3_Act');
	});
});
$(document).ready(function() {
	$('.KnopkaLVL2_3').click(function(event) {
		$('.Menu_LVL2_1,.Menu_LVL2_2,.Menu_LVL2_3,.Menu_LVL2_4,.Menu_LVL2_5').toggleClass('Act2K23');
		$('.KnopkaLVL2_2,.KnopkaLVL2_1,.KnopkaLVL2_4,.KnopkaLVL2_5').toggleClass('KnopkaLVL2_0');
		$('.Menu_LVL15_3').toggleClass('Menu_LVL15_Act');
		$('.Menu_LVL3_3_1,.Menu_LVL3_3_2,.Menu_LVL3_3_3,.Menu_LVL3_3_4,.Menu_LVL3_3_5').toggleClass('Menu_LVL3_Act');
	});
});
$(document).ready(function() {
	$('.KnopkaLVL2_4').click(function(event) {
		$('.Menu_LVL2_1,.Menu_LVL2_2,.Menu_LVL2_3,.Menu_LVL2_4,.Menu_LVL2_5').toggleClass('Act2K24');
		$('.KnopkaLVL2_4').toggleClass('K24K4');
		$('.KnopkaLVL2_2,.KnopkaLVL2_3,.KnopkaLVL2_1,.KnopkaLVL2_5').toggleClass('KnopkaLVL2_0');
		$('.Menu_LVL15_4').toggleClass('Menu_LVL15_Act');
		$('.Menu_LVL3_4_1,.Menu_LVL3_4_2,.Menu_LVL3_4_3,.Menu_LVL3_4_4,.Menu_LVL3_4_5').toggleClass('Menu_LVL3_Act');
	});
});
$(document).ready(function() {
	$('.KnopkaLVL2_5').click(function(event) {
		$('.Menu_LVL2_1,.Menu_LVL2_2,.Menu_LVL2_3,.Menu_LVL2_4,.Menu_LVL2_5').toggleClass('Act2K25');
		$('.KnopkaLVL2_5').toggleClass('K25K5');
		$('.KnopkaLVL2_2,.KnopkaLVL2_3,.KnopkaLVL2_4,.KnopkaLVL2_1').toggleClass('KnopkaLVL2_0');
		$('.Menu_LVL15_5').toggleClass('Menu_LVL15_Act');
		$('.Menu_LVL3_5_1,.Menu_LVL3_5_2,.Menu_LVL3_5_3,.Menu_LVL3_5_4,.Menu_LVL3_5_5').toggleClass('Menu_LVL3_Act');
	});
});