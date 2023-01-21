
$(document).ready(function() {
	$('.Body_Type2_Menu_Pynkt1').click(function(event) {
		$('.Body_Type2_BlockB1_Left').addClass('Act');
		$('.Body_Type2_BlockB1_Center').addClass('Act');
		$('.Body_Type2_BlockB1_Right').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.Body_Type2_Menu_Pynkt2').click(function(event) {
		$('.Body_Type2_BlockB1_Left').removeClass('Act');
		$('.Body_Type2_BlockB1_Center').removeClass('Act');
		$('.Body_Type2_BlockB1_Right').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.Body_Type2_Menu_Pynkt3').click(function(event) {
		$('.Body_Type2_BlockB1_Right').addClass('Act');
		$('.Body_Type2_BlockB1_Center').addClass('Act');
		$('.Body_Type2_BlockB1_Left').removeClass('Act');
	});
});