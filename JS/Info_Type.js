
const Pynkt1 = document.querySelector('.Body_Type2_Menu_Pynkt1');
const Pynkt2 = document.querySelector('.Body_Type2_Menu_Pynkt2');
const Pynkt3 = document.querySelector('.Body_Type2_Menu_Pynkt3');

const BlockLeft = document.querySelector('.Body_Type2_BlockB1_Left');
const BlockCenter = document.querySelector('.Body_Type2_BlockB1_Center');
const BlockRight = document.querySelector('.Body_Type2_BlockB1_Right');

Pynkt1.onclick = function () {
	BlockLeft.classList.add('Act');
	BlockCenter.classList.add('Act');
	BlockRight.classList.remove('Act');
}

Pynkt2.onclick = function () {
	BlockLeft.classList.remove('Act');
	BlockCenter.classList.remove('Act');
	BlockRight.classList.remove('Act');
}

Pynkt3.onclick = function () {
	BlockLeft.classList.remove('Act');
	BlockCenter.classList.add('Act');
	BlockRight.classList.add('Act');
}

const Knopka = document.querySelectorAll('.Type3_Element_Knopka');
