function Start_Pole (x,y) {
    const Start = document.querySelector(".Start");
    Start.style.display = "none";

    const Box_Menu_Create = document.createElement("div");
    Box_Menu_Create.classList = "Box_Menu";
    document.body.prepend(Box_Menu_Create);

    const Box_Menu = document.querySelector(".Box_Menu");

    const Box_K_Start_Create = document.createElement("div");
    Box_K_Start_Create.classList = "Box_K_Start";
    Box_K_Start_Create.innerHTML = "<div class='K_Start' onclick='Start ();'><p>S</p></div>"
    Box_Menu.prepend(Box_K_Start_Create);

    const Box_LTRB = document.createElement("div");
    Box_LTRB.classList = "Box_LTRB";
    Box_Menu.prepend(Box_LTRB);

    for (let f1 = 1; f1 <= 4; f1++){
        let Id = "K" + f1;
        let Text_K_LTRB;
        if (f1 == 1) {Text_K_LTRB = "L"} else if (f1 == 2) {Text_K_LTRB = "T"} else if (f1 == 3) {Text_K_LTRB = "R"} else if (f1 == 4) {Text_K_LTRB = "B"};
        let Funct_S = '"Info_Start ('+f1+');"';
        Box_LTRB.innerHTML = Box_LTRB.innerHTML + '<div class="Knopka" id='+ Id +' onclick='+Funct_S+'> <p>'+ Text_K_LTRB +' </p> </div>';
    };

    const K1 = document.getElementById("K1");
    const K2 = document.getElementById("K2");
    const K3 = document.getElementById("K3");
    const K4 = document.getElementById("K4");

///////////////////////////////////////////////////////////////

    const Box_Pole = document.createElement("div");
    Box_Pole.classList = "Box_Pole";
    document.body.prepend(Box_Pole);

    const Box_Pole_M = document.querySelector(".Box_Pole");

    for (let f1 = 0; f1 < x; f1++){
        Box_Pole_M.innerHTML = Box_Pole_M.innerHTML + "<div class='Element_X'></div>";
    };

    const Element_X = document.querySelectorAll(".Element_X");

    for (let f2 = 0; f2 < x; f2++){
        for (let f22 = 0; f22 < y; f22++) {
            Element_X[f2].innerHTML = Element_X[f2].innerHTML + "<div class='Element_Y'></div>";
        };
    };
};

function Start () {
    const Element_Y = document.querySelectorAll(".Element_Y");
    let Body = [90,0,0,0,0,0], Head;
    let Ogr = 6;
    let N1, N2;

    let Red = 1;

    let End;

    let R_Red = Math.random() * 199;
    R_Red = Math.ceil(R_Red);

    Element_Y[Body[1]].style.backgroundColor = "black";
    setInterval(function Run () {

        if (End != true) {
            if (K1.style.backgroundColor == "green") {
                N1=Ogr-1;N2=Ogr-2;
                for (let i=0; i < Ogr-1; i++){
                    Body[N1]=Body[N2];
                    N1--;N2--;
                };
                Body[0]-=20;
                for (let i=1; i < Ogr-1; i++){
                    if (Body[0] == Body[i]) {End = true;return;};
                };
                Head=Body[0]-20;
            }
            else if (K2.style.backgroundColor == "green") {
                N1=Ogr-1;N2=Ogr-2;
                for (let i=0; i < Ogr-1; i++){
                    Body[N1]=Body[N2];
                    N1--;N2--;
                };
                Body[0]-=1;
                for (let i=1; i < Ogr-1; i++){
                    if (Body[0] == Body[i]) {End = true;return;};
                };
                Head=Body[0]-1;
            }
            else if (K3.style.backgroundColor == "green") {
                N1=Ogr-1;N2=Ogr-2;
                for (let i=0; i < Ogr-1; i++){
                    Body[N1]=Body[N2];
                    N1--;N2--;
                };
                Body[0]+=20;
                for (let i=1; i < Ogr-1; i++){
                    if (Body[0] == Body[i]) {End = true;return;};
                };
                Head=Body[0]+20;
            }
            else if (K4.style.backgroundColor == "green") {
                N1=Ogr-1;N2=Ogr-2;
                for (let i=0; i < Ogr-1; i++){
                    Body[N1]=Body[N2];
                    N1--;N2--;
                };
                Body[0]+=1;
                for (let i=1; i < Ogr-1; i++){
                    if (Body[0] == Body[i]) {End = true;return;};
                };
                Head=Body[0]+1;
            }
            else {
                N1=Ogr-1;N2=Ogr-2;
                for (let i=0; i < Ogr-1; i++){
                    Body[N1]=Body[N2];
                    N1--;N2--;
                };
                Body[0]+=20;
                for (let i=1; i < Ogr-1; i++){
                    if (Body[0] == Body[i]) {End = true;return;};
                };
                Head=Body[0]+20;
            };
            console.log (Body[0] + " " + Head);
            if (Body[0] > 199 || Body[0] < 0 || Body[0]%20 == 0 && Head%20 == 1 || Body[0]%20 == 19 && Head %20 == 18) {
                End = true;
                return;
            };

            while (Red != 1) {
                if (Element_Y[R_Red].style.backgroundColor == "black") {
                    R_Red = Math.random() * 199;
                    R_Red = Math.ceil(R_Red);
                } else {
                    Element_Y[R_Red].style.backgroundColor = "red";
                    Red = 1;
                };
            };
            Red = 0;

            if (Body[0] <= 199 && Body[0] >= 0) {
            Element_Y[Body[0]].style.backgroundColor = "black";
            };
            Element_Y[Body[Ogr-1]].style.backgroundColor = "white";
            
            if (Element_Y[R_Red].style.backgroundColor == "black") {
                R_Red = Math.random() * 199;
                R_Red = Math.ceil(R_Red);
                Body[Ogr] = 0;
                Ogr++;
            };
        };
    }
    , 200);
};

let Block1 = 0,Block2 = 1,Block3 = 1,Block4 = 1;

function Info_Start (Run) {
    if (Run==1 && Block1 == 1 ) {
        K1.style.backgroundColor = "green";
        K2.style.backgroundColor = "yellow";
        K3.style.backgroundColor = "yellow";
        K4.style.backgroundColor = "yellow";
        Block1 = 1;Block2 = 1;Block3 = 0;Block4 = 1;
    } else if (Run==2 && Block2 == 1) {
        K1.style.backgroundColor = "yellow";
        K2.style.backgroundColor = "green";
        K3.style.backgroundColor = "yellow";
        K4.style.backgroundColor = "yellow";
        Block1 = 1;Block2 = 1;Block3 = 1;Block4 = 0;
    } else if (Run==3 && Block3 == 1) {
        K1.style.backgroundColor = "yellow";
        K2.style.backgroundColor = "yellow";
        K3.style.backgroundColor = "green";
        K4.style.backgroundColor = "yellow";
        Block1 = 0;Block2 = 1;Block3 = 1;Block4 = 1;
    } else if (Run==4 && Block4 == 1) {
        K1.style.backgroundColor = "yellow";
        K2.style.backgroundColor = "yellow";
        K3.style.backgroundColor = "yellow";
        K4.style.backgroundColor = "green";
        Block1 = 1;Block2 = 0;Block3 = 1;Block4 = 1;
    };
};
