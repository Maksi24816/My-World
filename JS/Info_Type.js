
const Pynkt1 = document.querySelector('.Body_Type2_Menu_Pynkt1');
const Pynkt2 = document.querySelector('.Body_Type2_Menu_Pynkt2');
const Pynkt3 = document.querySelector('.Body_Type2_Menu_Pynkt3');

const BlockLeft = document.querySelector('.Body_Type2_BlockB1_Left');
const BlockCenter = document.querySelector('.Body_Type2_BlockB1_Center');
const BlockRight = document.querySelector('.Body_Type2_BlockB1_Right');

Pynkt1.onclick = function () {
	BlockLeft.style.left = "-40%";
	BlockCenter.style.top = "500px";
	BlockCenter.style.opacity = "0";
	BlockCenter.style.visibility = "hidden";
	BlockRight.style.right = "-400%";
}

Pynkt2.onclick = function () {
	BlockLeft.style.left = "-400%";
	BlockCenter.style.top = "126px";
	BlockCenter.style.opacity = "1";
	BlockCenter.style.visibility = "visible";
	BlockRight.style.right = "-400%";
}

Pynkt3.onclick = function () {
	BlockLeft.style.left = "-400%";
	BlockCenter.style.top = "500px";
	BlockCenter.style.opacity = "0";
	BlockCenter.style.visibility = "hidden";
	BlockRight.style.right = "-40%";
}

const Knopka = document.querySelectorAll('.Type3_Element_Knopka');
