let arr = [];

function PoleGame (at, bt) {
    const Start = document.querySelector(".Start");
    Start.style.display = "none";

    const Start_Act = document.querySelector(".Start_Act");
    Start_Act.style.display = "inline";

    const Random_Act = document.querySelector(".Random_Act");
    Random_Act.style.display = "inline";

    let x = at;let y = bt;

    const Box_Game = document.createElement("div");
    Box_Game.classList = "Box_Game";
    document.body.prepend(Box_Game);

    const Box_Game_M = document.querySelector(".Box_Game");

    const Element_Pole = document.createElement("div");
    Element_Pole.classList = "Element_Pole";

    for (let f1 = 0; f1 < x; f1++){
        Box_Game_M.innerHTML = Box_Game_M.innerHTML + "<div class='Element_Pole_Box'></div>";
    };

    const Element_Pole_M = document.querySelectorAll(".Element_Pole_Box");
    for (let f2 = 0; f2 < x; f2++){
        for (let f22 = 0; f22 < y; f22++) {
            Element_Pole_M[f2].innerHTML = Element_Pole_M[f2].innerHTML + "<div class='Element_Pole' onclick='Logic(this,25, 25)'></div>";
        };
    };
};

function Logic (M,x,y) {
    const Elem = M;
    M.style.backgroundColor = "black";
};

function Random (x,y) {
    const Polya = document.querySelectorAll(".Element_Pole");
    const c = x * y;
    for (let f1 = 0; f1 < c; f1++) {
        arr[f1] = Math.random() * 2 - 1;
        arr[f1] = Math.ceil(arr[f1]);
        console.log(arr[f1]);
    };

    for (let f2 = 0; f2 < c; f2++) {
        if (arr[f2] == 0 || arr[f2] == -0) {
            Polya[f2].style.backgroundColor = "white";
        } else if (arr[f2] == 1) {
            Polya[f2].style.backgroundColor = "black";
        };
    };
    Posyk (x,y);
};

function Posyk (x,y) {
    const Polya = document.querySelectorAll(".Element_Pole");

    const c = x * y;
    setInterval( function repith () {
        for (let f1 = 0; f1 < c; f1++) {
            let S = 0;
            if (Polya[f1+1] == undefined) {} else if (Polya[f1+1].style.backgroundColor == "black"){
                S++;
            };
            if (Polya[f1-1] == undefined) {} else if (Polya[f1-1].style.backgroundColor == "black"){
                S++;
            };
            if (Polya[f1+75] == undefined) {} else if (Polya[f1+75].style.backgroundColor == "black"){
                S++;
            };
            if (Polya[f1-75] == undefined) {} else if (Polya[f1-75].style.backgroundColor == "black"){
                S++;
            };
            if (Polya[f1-74] == undefined) {} else if (Polya[f1-74].style.backgroundColor == "black"){
                S++;
            };
            if (Polya[f1-76] == undefined) {} else if (Polya[f1-76].style.backgroundColor == "black"){
                S++;
            };
            if (Polya[f1+76] == undefined) {} else if (Polya[f1+76].style.backgroundColor == "black"){
                S++;
            };
            if (Polya[f1+74] == undefined) {} else if (Polya[f1+74].style.backgroundColor == "black"){
                S++;
            };
            if (S <= 1 || S >= 4) {
                arr[f1] = 0;
            } else if (S == 3) {
                arr[f1] = 1;
            };
        };
        for (let f2 = 0; f2 < c; f2++) {
            if (arr[f2] == 0 || arr[f2] == -0) {
                Polya[f2].style.backgroundColor = "white";
            } else if (arr[f2] == 1) {
                Polya[f2].style.backgroundColor = "black";
            };
        };
    }, 100);
};
