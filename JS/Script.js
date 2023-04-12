const F1 = document.getElementById("F1");const F2 = document.getElementById("F2");const F3 = document.getElementById("F3");const F4 = document.getElementById("F4");
const F5 = document.getElementById("F5");const F6 = document.getElementById("F6");const F7 = document.getElementById("F7");const F8 = document.getElementById("F8");
const F9 = document.getElementById("F9");const F10 = document.getElementById("F10");const F11 = document.getElementById("F11");const F12 = document.getElementById("F12");

function Elevator(Num){
	const Block_Elevator = document.querySelector(".Elevator_Block");
	Block_Elevator.style.zIndex = "3";
	let WindowsScrollTop = window.pageYOffset;

	let WindowsHeight = window.innerHeight;
	let storage1 = WindowsScrollTop;
	let numFor = 0;

	if(Num == 1){
		for (let y = 0; y < 100;y++){
			if (y <= 0) {
				storage1 = storage1 - WindowsHeight;
				if (storage1 >= -0){numFor++;} else {y = 100;};
			} else {
				storage1 = storage1 - WindowsHeight * 1.25 + 0.25;
				if (storage1 >= -0){numFor++;} else {y = 100;};
			}
		};
		let Inaccuracy = ScrollTop = (WindowsHeight * 1)+((numFor-1)*(WindowsHeight * 1.25));
		let difference = Inaccuracy - WindowsScrollTop;
		console.log(difference);
		if (difference >= 0){numFor--;}
		let Cellars = (WindowsHeight * 1)+(numFor*(WindowsHeight * 1.25));
		let CellarsCeiling = Cellars - WindowsHeight * 0.25;
		if(WindowsScrollTop > CellarsCeiling && WindowsScrollTop < Cellars){ScrollTop = (WindowsHeight * 1)+((numFor-1)*(WindowsHeight * 1.25));} else {ScrollTop = (WindowsHeight * 1)+((numFor-1)*(WindowsHeight * 1.25));}
		let Difference = (ScrollTop - WindowsScrollTop - (numFor * 0.25)) / 30;
		let Num = 0;
		let Interval = setInterval(() => {
			window.scrollBy(0,Difference);
			Num++;
			if (Num == 30){
				window.scrollTo(0,ScrollTop);
				Block_Elevator.style.zIndex = "1";
				clearInterval(Interval);
			};
		}, 33);
	} else if (Num == 2){
		for (let y = 0; y < 100;y++){
			if (y <= 0) {
				storage1 = storage1 - WindowsHeight;
				if (storage1 >= -0){numFor++;} else {y = 100;};
			} else {
				storage1 = storage1 - WindowsHeight * 1.25 + 0.25;
				if (storage1 >= -0){numFor++;} else {y = 100;};
			}
		};
		ScrollTop = (WindowsHeight * 1)+(numFor*(WindowsHeight * 1.25));
		let Difference = (ScrollTop - WindowsScrollTop - (numFor * 0.25)) / 30;
		let Num = 0;
		let Interval = setInterval(() => {
			window.scrollBy(0,Difference);
			Num++;
			if (Num == 30){
				window.scrollTo(0,ScrollTop);
				Block_Elevator.style.zIndex = "1";
				clearInterval(Interval);
			};
		}, 33);
	} else {
		return;
	};
};
function ElevatorList(NumG){
	let WindowsScrollTop = window.pageYOffset;
	let WindowsHeight = window.innerHeight;
	let storage1 = WindowsScrollTop;
	let numFor = 0;

	for (let y = 0; y < 100;y++){
		if (y <= 0) {
			storage1 = storage1 - WindowsHeight;
			if (storage1 >= -0){numFor++;} else {y = 100;};
		} else {
			storage1 = storage1 - WindowsHeight * 1.25 + 0.25;
			if (storage1 >= -0){numFor++;} else {y = 100;};
		}
	};
	
	let Inaccuracy = ScrollTop = (WindowsHeight * 1)+((numFor-1)*(WindowsHeight * 1.25));
	let difference = Inaccuracy - WindowsScrollTop;
	console.log(numFor);

	if (difference == 0 && (NumG+1) == numFor) {
		return;
	} else {
		const Block_Elevator = document.querySelector(".Elevator_Block");
		Block_Elevator.style.zIndex = "3";
	
		let WindowsScrollTop = window.pageYOffset;
		let WindowsHeight = window.innerHeight;
	
		let ScrollTop = (WindowsHeight * 1)+(NumG * (WindowsHeight * 1.25));
		let Difference = (ScrollTop - WindowsScrollTop - (NumG * 0.25)) / 30;
	
		let Num = 0;
	
		let Interval = setInterval(() => {
			window.scrollBy(0,Difference);
			Num++;
			if (Num == 30){
				window.scrollTo(0,ScrollTop);
				Block_Elevator.style.zIndex = "1";
				clearInterval(Interval);
			};
		}, 33);
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
			Elem.style.width = "355px"
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
		Site1_1.style.top = "0";Site1_1.style.right = "0";
		Site1_2.style.top = "0";
		Site1_3.style.top = "0";Site1_3.style.left = "0";

		Element1.style.right = "650px";Element1.style.top = "-650px";
		Element2.style.top = "1000px";Element3.style.top = "-1000px";Element4.style.top = "1000px";
		Element5.style.left = "650px";Element5.style.top = "-650px";

		Site2_1.style.top = "650px";Site2_1.style.right = "650px";
		Site2_2.style.top = "-1000px";
		Site2_3.style.top = "650px";Site2_3.style.left = "650px";

		TwoWindow_1.style.left = "0%";
		TwoWindow_2.style.opacity = "0";
		TwoWindow_2.style.top = "693px";
		TwoWindow_3.style.right = "-100%";
	} else if (Num == 2){
		Site1_1.style.top = "650px";Site1_1.style.right = "650px";
		Site1_2.style.top = "-1000px";
		Site1_3.style.top = "650px";Site1_3.style.left = "650px";

		Element1.style.right = "0";Element1.style.top = "0";
		Element2.style.top = "0";Element3.style.top = "0";Element4.style.top = "0";
		Element5.style.left = "0";Element5.style.top = "0";

		Site2_1.style.top = "650px";Site2_1.style.right = "650px";
		Site2_2.style.top = "-1000px";
		Site2_3.style.top = "650px";Site2_3.style.left = "650px";

		TwoWindow_1.style.left = "-100%";
		TwoWindow_2.style.opacity = "1";
		TwoWindow_2.style.top = "393px";
		TwoWindow_3.style.right = "-100%";
	} else if (Num == 3){
		Site1_1.style.top = "650px";Site1_1.style.right = "650px";
		Site1_2.style.top = "-1000px";
		Site1_3.style.top = "650px";Site1_3.style.left = "650px";

		Element1.style.right = "650px";Element1.style.top = "-650px";
		Element2.style.top = "1000px";Element3.style.top = "-1000px";Element4.style.top = "1000px";
		Element5.style.left = "650px";Element5.style.top = "-650px";

		Site2_1.style.top = "0";Site2_1.style.right = "0";
		Site2_2.style.top = "0";
		Site2_3.style.top = "0";Site2_3.style.left = "0";

		TwoWindow_1.style.left = "-100%";
		TwoWindow_2.style.opacity = "0";
		TwoWindow_2.style.top = "693px";
		TwoWindow_3.style.right = "0%";
	}
}

function ToExtend (Elem, Type){
	let Parent = Elem.parentNode;
	let Child = Elem.childNodes[0];
	
	Parent.classList.toggle("Act");

	if (Type == "C"){
		if (Parent.classList.contains('Act')){
			Parent.style.height = "380px";
			Parent.style.marginTop = "215px";
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
			Parent.style.height = "471px";
			Parent.style.marginTop = "284px";
			Child.style.borderTop = "0";
			Child.style.borderBottom = "16px black solid";
		} else {
			Parent.style.height = "391px";
			Parent.style.marginTop = "204px";
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
		FiveButton1.style.width = "8px";FiveButton1.style.height = "8px";
		FiveButton2.style.width = "16px";FiveButton2.style.height = "16px";
		FiveButton3.style.width = "16px";FiveButton3.style.height = "16px";
		F1.style.width = "75%";F2.style.width = "75%";
		F3.style.width = "75%";F4.style.width = "75%";
		F5.style.width = "0%";F6.style.width = "0%";;
		F7.style.width = "0%";F8.style.width = "0%";
		F9.style.width = "0%";F10.style.width = "0%";
		F11.style.width = "0%";F12.style.width = "0%";
	} else if (Storey == 2){
		FiveButton1.style.width = "16px";FiveButton1.style.height = "16px";
		FiveButton2.style.width = "8px";FiveButton2.style.height = "8px";
		FiveButton3.style.width = "16px";FiveButton3.style.height = "16px";
		F1.style.width = "0%";F2.style.width = "0%";
		F3.style.width = "0%";F4.style.width = "0%";
		F5.style.width = "75%";F6.style.width = "75%";
		F7.style.width = "75%";F8.style.width = "75%";
		F9.style.width = "0%";F10.style.width = "0%";
		F11.style.width = "0%";F12.style.width = "0%";
	} else if (Storey == 3) {
		FiveButton1.style.width = "16px";FiveButton1.style.height = "16px";
		FiveButton2.style.width = "16px";FiveButton2.style.height = "16px";
		FiveButton3.style.width = "8px";FiveButton3.style.height = "8px";
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