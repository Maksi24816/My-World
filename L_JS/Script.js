let WidthWindovs = window.innerWidth, WidthWindovsNew;

const Section = document.getElementsByClassName("Section");
const Space = document.getElementsByClassName("Space");
const Body = document.querySelector(".Body");
let Zoom = 1 / (1920 / WidthWindovs);;

let WindowsHeight = 937 * Zoom;
let WindowsHeightSpace = 312.333 * Zoom;

Body.style.top = WindowsHeight + "px";

for(let y = 0; y < Section.length; y++){
	Section[y].style.height = WindowsHeight + "px";
}

for(let y = 0; y < Space.length; y++){
	Space[y].style.height = WindowsHeightSpace + "px";
}

const BOne = document.getElementById("Box_One");
const BTwo = document.getElementById("Box_Two");
const BThree = document.getElementById("Box_Three");
const BFour = document.getElementById("Box_Four");
const BFive = document.getElementById("Box_Five");

Zoom = 1 / (1920 / WidthWindovs);
BOne.style.transform = "scale(" + Zoom + ")";
BTwo.style.transform = "scale(" + Zoom + ")";
BThree.style.transform = "scale(" + Zoom + ")";
BFour.style.transform = "scale(" + Zoom + ")";
BFive.style.transform = "scale(" + Zoom + ")";

setInterval(function(){
	WidthWindovsNew = window.innerWidth;
	if (WidthWindovs != WidthWindovsNew){
		WidthWindovs = WidthWindovsNew;

		Zoom = 1 / (1920 / WidthWindovs);
		BOne.style.transform = "scale(" + Zoom + ")";
		BTwo.style.transform = "scale(" + Zoom + ")";
		BThree.style.transform = "scale(" + Zoom + ")";
		BFour.style.transform = "scale(" + Zoom + ")";
		BFive.style.transform = "scale(" + Zoom + ")";
	}
},100)

const F1 = document.getElementById("F1");const F2 = document.getElementById("F2");const F3 = document.getElementById("F3");const F4 = document.getElementById("F4");
const F5 = document.getElementById("F5");const F6 = document.getElementById("F6");const F7 = document.getElementById("F7");const F8 = document.getElementById("F8");
const F9 = document.getElementById("F9");const F10 = document.getElementById("F10");const F11 = document.getElementById("F11");const F12 = document.getElementById("F12");

let ActElevator = false;

function Elevator(Num){
	let WindowsScrollTop = window.pageYOffset;

	let storage1 = WindowsScrollTop;
	let numFor = 0;
	if (ActElevator == false){
		ActElevator = true;
		if(Num == 1){
			for (let y = 0; y < 100;y++){
				if (y <= 0) {
					storage1 = storage1 - WindowsHeight;
					if (storage1 >= 0){numFor++;} else {y = 100;};
				} else {
					storage1 = storage1 - WindowsHeight * 1.334 + 0.334;
					if (storage1 >= 0){numFor++;} else {y = 100;};
				}
			};
			let Inaccuracy = ScrollTop = (WindowsHeight * 1)+((numFor-1)*(WindowsHeight * 1.334));
			let difference = Inaccuracy - WindowsScrollTop;
	
			if (difference >= 0){numFor--;}
			let Cellars = (WindowsHeight * 1)+(numFor*(WindowsHeight * 1.334));
			let CellarsCeiling = Cellars - WindowsHeight * 0.334;
			if(WindowsScrollTop > CellarsCeiling && WindowsScrollTop < Cellars){ScrollTop = (WindowsHeight * 1)+((numFor-1)*(WindowsHeight * 1.334));} else {ScrollTop = (WindowsHeight * 1)+((numFor-1)*(WindowsHeight * 1.334));}
			let Difference = (ScrollTop - WindowsScrollTop - (numFor * 0.334)) / 60;
			let Num = 0;
			let Interval = setInterval(() => {
				if (Num % 2 == 0){
					window.scrollBy(0,Difference+1);
				} else {
					window.scrollBy(0,Difference);
				}
				Num++;
				if (Num == 60){
					window.scrollTo(0,ScrollTop);
					ActElevator = false;
					clearInterval(Interval);
				};
			}, 15);
		} else if (Num == 2){


			for (let y = 0; y < 100;y++){
				if (y <= 0) {
					storage1 = storage1 - WindowsHeight;
					if (storage1 >= -0){numFor++;} else {y = 100;};
				} else {
					storage1 = storage1 - WindowsHeight * 1.333 + 0.333;
					if (storage1 >= -0){numFor++;} else {y = 100;};
				}
			};

			ScrollTop = (WindowsHeight * 1)+(numFor*(WindowsHeight * 1.333));
			ScrollTop = Math.floor(ScrollTop);

			let Difference = (ScrollTop - WindowsScrollTop - (numFor * 0.333)) / 60;
			let Num = 0;
			let Interval = setInterval(() => {
				if (Num % 2 == 0){
					window.scrollBy(0,Difference+1);
				} else {
					window.scrollBy(0,Difference);
				}
				Num++;
				if (Num == 60){
					window.scrollTo(0,ScrollTop + 1);
					ActElevator = false;
					clearInterval(Interval);
				};
			}, 15);
		} else {
			return;
		};
	}
};
function ElevatorList(NumG){
	let WindowsScrollTop = window.pageYOffset;
	let WindowsHeight = 937;
	let storage1 = WindowsScrollTop;
	let numFor = 0;

	for (let y = 0; y < 100;y++){
		if (y <= 0) {
			storage1 = storage1 - WindowsHeight;
			if (storage1 >= -0){numFor++;} else {y = 100;};
		} else {
			storage1 = storage1 - WindowsHeight * 1.333 + 0.333;
			if (storage1 >= -0){numFor++;} else {y = 100;};
		}
	};
	
	let Inaccuracy = ScrollTop = (WindowsHeight * 1)+((numFor-1)*(WindowsHeight * 1.333));
	let difference = Inaccuracy - WindowsScrollTop;

	if (difference == 0 && (NumG+1) == numFor) {
		return;
	} else {
		const Block_Elevator = document.querySelector(".Elevator_Block");
		Block_Elevator.style.zIndex = "3";
	
		let WindowsScrollTop = window.pageYOffset;
	
		let ScrollTop = (WindowsHeight * 1)+(NumG * (WindowsHeight * 1.333));
		let Difference = (ScrollTop - WindowsScrollTop - (NumG * 0.05)) / 60;
	
		let Num = 0;
	
		let Interval = setInterval(() => {
			if (Num % 2 == 0){
				window.scrollBy(0,Difference+1);
			} else {
				window.scrollBy(0,Difference);
			}
			Num++;
			if (Num == 60){
				window.scrollTo(0,ScrollTop);
				Block_Elevator.style.zIndex = "1";
				clearInterval(Interval);
			};
		}, 15);
	}
};
function SMSLanguages_Choice (Elem,Act,Func){
	if (Func == 1){
		if (Act == 1){
			Elem.style.width = "450px"
		} else {
			Elem.style.width = "100px"
		};
	} else {
		if (Act == 1){
			Elem.style.width = "375px"
		} else {
			Elem.style.width = "100px"
		};
	}

};

function Two_Fun(Num){
	const TwoWindow_1 = document.getElementById("TwoWindow_1");
	const TwoWindow_2 = document.getElementById("TwoWindow_2");
	const TwoWindow_3 = document.getElementById("TwoWindow_3");

	const Site1_1 = document.getElementById("Site1_1");const Site1_2 = document.getElementById("Site1_2");const Site1_3 = document.getElementById("Site1_3");
	const Element1 = document.getElementById("Element1");const Element2 = document.getElementById("Element2");const Element3 = document.getElementById("Element3");const Element4 = document.getElementById("Element4");const Element5 = document.getElementById("Element5");
	const Site2_1 = document.getElementById("Site2_1");const Site2_2 = document.getElementById("Site2_2");const Site2_3 = document.getElementById("Site2_3");

	if (Num == 1){
		Site1_1.classList.add("Active");
		Site1_2.classList.add("Active");
		Site1_3.classList.add("Active");

		Element1.classList.add("Active2");
		Element2.classList.add("Active2");
		Element3.classList.add("Active2");
		Element4.classList.add("Active2");
		Element5.classList.add("Active2");

		Site2_1.classList.remove("Active");
		Site2_2.classList.remove("Active");
		Site2_3.classList.remove("Active");

		TwoWindow_1.classList.add("Active");
		TwoWindow_2.classList.remove("Active");
		TwoWindow_3.classList.remove("Active");
	} else if (Num == 2){
		Site1_1.classList.remove("Active");
		Site1_2.classList.remove("Active");
		Site1_3.classList.remove("Active");

		Element1.classList.remove("Active2");
		Element2.classList.remove("Active2");
		Element3.classList.remove("Active2");
		Element4.classList.remove("Active2");
		Element5.classList.remove("Active2");

		Site2_1.classList.remove("Active");
		Site2_2.classList.remove("Active");
		Site2_3.classList.remove("Active");

		TwoWindow_1.classList.remove("Active");
		TwoWindow_2.classList.add("Active");
		TwoWindow_3.classList.remove("Active");
	} else if (Num == 3){
		Site1_1.classList.remove("Active");
		Site1_2.classList.remove("Active");
		Site1_3.classList.remove("Active");

		Element1.classList.add("Active2");
		Element2.classList.add("Active2");
		Element3.classList.add("Active2");
		Element4.classList.add("Active2");
		Element5.classList.add("Active2");

		Site2_1.classList.add("Active");
		Site2_2.classList.add("Active");
		Site2_3.classList.add("Active");

		TwoWindow_1.classList.remove("Active");
		TwoWindow_2.classList.remove("Active");
		TwoWindow_3.classList.add("Active");
	}
}

function ToExtend (Elem, Type){
	let Parent = Elem.parentNode;
	let Child = Elem.childNodes[0];
	
	Parent.classList.toggle("Act");

	if (Type == "C"){
		if (Parent.classList.contains('Act')){
			Parent.style.height = "380px";
			Parent.style.marginTop = "205px";
			Child.style.borderTop = "0";
			Child.style.borderBottom = "16px black solid";
		} else {
			Parent.style.height = "320px";
			Parent.style.marginTop = "155px";
			Child.style.borderTop = "16px black solid";
			Child.style.borderBottom = "0";
		};
	} else {
		if (Parent.classList.contains('Act')){
			Parent.style.height = "450px";
			Parent.style.marginTop = "233px";
			Child.style.borderTop = "0";
			Child.style.borderBottom = "16px black solid";
		} else {
			Parent.style.height = "391px";
			Parent.style.marginTop = "174px";
			Child.style.borderTop = "16px black solid";
			Child.style.borderBottom = "0";
		};
	}
}

let Storey = 1;

function FiveElevator (Action) {
	const FiveButton1 = document.getElementById("Five_Button-1");
	const FiveButton2 = document.getElementById("Five_Button-2");
	const FiveButton3 = document.getElementById("Five_Button-3");

	if(Action == 1){
		if (Storey != 1){
			Storey--;
		} else {
			Storey = 3;
		}
	} else if (Action == 2) {
		if (Storey != 3){
			Storey++;
		} else {
			Storey = 1;
		}
	}

	if(Storey == 1) {
		FiveButton1.style.width = "9px";FiveButton1.style.height = "9px";
		FiveButton2.style.width = "14px";FiveButton2.style.height = "14px";
		FiveButton3.style.width = "14px";FiveButton3.style.height = "14px";
		F1.style.width = "75%";F2.style.width = "75%";
		F3.style.width = "75%";F4.style.width = "75%";
		F5.style.width = "0%";F6.style.width = "0%";;
		F7.style.width = "0%";F8.style.width = "0%";
		F9.style.width = "0%";F10.style.width = "0%";
		F11.style.width = "0%";F12.style.width = "0%";
	} else if (Storey == 2){
		FiveButton1.style.width = "14px";FiveButton1.style.height = "14px";
		FiveButton2.style.width = "9px";FiveButton2.style.height = "9px";
		FiveButton3.style.width = "14px";FiveButton3.style.height = "14px";
		F1.style.width = "0%";F2.style.width = "0%";
		F3.style.width = "0%";F4.style.width = "0%";
		F5.style.width = "75%";F6.style.width = "75%";
		F7.style.width = "75%";F8.style.width = "75%";
		F9.style.width = "0%";F10.style.width = "0%";
		F11.style.width = "0%";F12.style.width = "0%";
	} else if (Storey == 3) {
		FiveButton1.style.width = "14px";FiveButton1.style.height = "14px";
		FiveButton2.style.width = "14px";FiveButton2.style.height = "14px";
		FiveButton3.style.width = "9px";FiveButton3.style.height = "9px";
		F1.style.width = "0%";F2.style.width = "0%";
		F3.style.width = "0%";F4.style.width = "0%";
		F5.style.width = "0%";F6.style.width = "0%";
		F7.style.width = "0%";F8.style.width = "0%";
		F9.style.width = "75%";F10.style.width = "75%";
		F11.style.width = "75%";F12.style.width = "75%";
	}
}

function Boxs (BoxAct) {
	const Box1 = document.querySelector(".Five_BoxFoto");
	const Box2 = document.querySelector(".Five_BoxText");
	if (BoxAct == 1){
		Box1.style.left = "600px";
		Box2.style.right = "-600px";
	} else if (BoxAct == 2) {
		Box1.style.left = "-600px";
		Box2.style.right = "600px";
	}
}

function Elevator_Hide () {
	const Elevator = document.querySelector(".Elevator");
	const Hez = document.querySelector(".Elevator_Buttons-Hez");
	Elevator.classList.toggle("Active")
	Hez.classList.toggle("Active")
};

function Knopka_Act () {
	const Three_Box = document.querySelector(".Three_Box")
	const IMG_Three = document.querySelector(".IMG_Three")
	const Three_Box_Opacity = document.querySelector(".Three_Box-Opacity");
	Three_Box.style.left = 0;
	IMG_Three.style.marginLeft = "648px";

	setTimeout(function (){
		IMG_Three.style.display = "none";
		Three_Box_Opacity.style.display = "none";
	}, 1500)
}

const Anim = document.getElementsByClassName("Anim");
if (Anim.length > 0){
	window.addEventListener('scroll', function AnimOnScroll(parent) {
		for(let index = 0; index < Anim.length; index++){
			const AnimItem = Anim[index];
			const AnimItemsHeight = AnimItem.offsetHeight;
			const AnimItemsOffSet = offset(AnimItem).top;
			const AnimStart = 4;

			let animItemPoint = window.innerHeight - AnimItemsHeight / AnimStart;
			
			if (AnimItemsHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / AnimStart;
			};

			if ((pageYOffset > AnimItemsOffSet - animItemPoint) && pageYOffset < (AnimItemsOffSet + AnimItemsHeight)){
				AnimItem.classList.add("Active");
			}
		}
		function offset (el){
			const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageXOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
	})
}

function ToggleWinGven () {
	const Window_Gven = document.querySelector(".Window_Gven")

	Window_Gven.classList.toggle("Active");
}