function CreatePole (X, Y) {
    let Pole_Box = document.createElement("div");
    Pole_Box.classList = "Pole_Box";
    document.body.append(Pole_Box);

    let Pole_Box_Citi1 = document.createElement("div");
    Pole_Box_Citi1.classList = "Pole_Box_Citi";
    document.body.append(Pole_Box_Citi1);

    CreatePole_Citi ();
    Zemlya_Citi ();

    let LeftG = 0;
    for (let x = 0; x < X; x++){
        let Left = 350;
        let Top = 0;
        for (let y = 0; y < Y; y++) {
            let Pole = document.createElement("div");
            Pole.classList = "Pole";
            Pole.setAttribute('Name', "x" + x + "_y" + y);
            Pole.style.left = Left + LeftG + "px";
            Pole.style.top = Top + "px";

            const Pole_Box = document.querySelector(".Pole_Box");
            Pole_Box.append(Pole);
            if (y%2 != 0){
                Left-=11;
            } else {
                Left+=11;
            };
            Top+=19;
        };
        LeftG+=22;
    };
};

function Zemlya (X, Y) {
    let num = 0;
    for (let x = 0; x < X; x++){
        for (let y = 0; y < Y; y++){
            let Pole = document.getElementsByName("x" + x + "_y" + y);
            if (mas[num] == 1){
                Pole[0].classList.add('Zemlya');
            } else if (mas[num] == 2) {
                Pole[0].classList.add('CitiG');
                Pole[0].addEventListener('mouseover', function (){
                    let Citi_Text = document.createElement("div");
                    Citi_Text.classList = "Citi_Text";
                    Citi_Text.innerText = "The town";
                    let PoleLeft = Pole[0].offsetLeft;
                    let PoleTop = Pole[0].offsetTop;

                    Citi_Text.style.left = PoleLeft - 33 + "px";
                    Citi_Text.style.top = PoleTop - 24 + "px";

                    document.body.append(Citi_Text);
                });
                
                Pole[0].addEventListener('mouseout', function (){
                    let Ole = document.querySelector(".Citi_Text");
                    Ole.remove();
                });

                Pole[0].addEventListener('click', function (){
                    const Pole_Box = document.querySelector(".Pole_Box");
                    Pole_Box.style.visibility = "hidden";

                    let Pole_Box_Citi1 = document.querySelector(".Pole_Box_Citi");
                    Pole_Box_Citi1.style.visibility = "visible";

                    let Map_Box = document.querySelector(".Map_Knopka");
                    Map_Box.style.visibility = "visible";

                    Map_Box.addEventListener('click', function (){
                        Map_Box.style.visibility = "hidden";
                        Pole_Box_Citi1.style.visibility = "hidden";
                        Pole_Box.style.visibility = "visible";
                    });
                });
            };
            num++;
        };
    };
};

/////


function CreatePole_Citi (X = 15, Y = 15) {
    let LeftG = 0;

    for (let x = 0; x < X; x++){
        let Left = 773;
        let Top = 150;
        for (let y = 0; y < Y; y++) {
            let Pole_Box_Citi = document.querySelector(".Pole_Box_Citi");
            let Pole = document.createElement("div");
            Pole.classList = "Pole";
            Pole.setAttribute('Name', "Citi " + "x" + x + "_y" + y);
            Pole.style.left = Left + LeftG + "px";
            Pole.style.top = Top + "px";
            Pole_Box_Citi.append(Pole);
            if (y%2 != 0){
                Left-=11;
            } else {
                Left+=11;
            };
            Top+=19;
        };
        LeftG+=22;
    };
};

let Mission_Act = 0;

function Zemlya_Citi (X = 15, Y = 15) {
    let num = 0;
    for (let x = 0; x < X; x++){
        for (let y = 0; y < Y; y++){
            let Pole = document.getElementsByName("Citi " + "x" + x + "_y" + y);
            if (Mas_Citi_1[num] == 1){
                Pole[0].classList.add('Zemlya');
            } else if (Mas_Citi_1[num] == 3){
                Pole[0].classList.add('Guild');

                Pole[0].addEventListener('mouseover', function (){
                    let Citi_Text = document.createElement("div");
                    Citi_Text.classList = "Citi_Text";
                    Citi_Text.innerText = "Guild";
                    let PoleLeft = Pole[0].offsetLeft;
                    let PoleTop = Pole[0].offsetTop;

                    Citi_Text.style.left = PoleLeft - 33 + "px";
                    Citi_Text.style.top = PoleTop - 24 + "px";

                    document.body.append(Citi_Text);
                });
                
                Pole[0].addEventListener('mouseout', function (){
                    let Ole = document.querySelector(".Citi_Text");
                    Ole.remove();
                });

                Pole[0].addEventListener('click', function (){
                    let Guild_Board = document.createElement("div");
                    Guild_Board.classList = "Guild_Board";
                    Guild_Board.innerHTML = "<div class='Leave_Guild_Board' onclick = 'Leave_Guild_Board()'></div><div id='Z1' class='Zakaz'><div id='Name' class='Pole_Zakaz'>Назва - Слайми</div><div id='Rank' class='Pole_Zakaz'>Ранг - E</div><div id='Complexity' class='Pole_Zakaz'>Складність - Легка</div><div id='Number' class='Pole_Zakaz'>Кількість -1-3</div><div class='Button'>Прийняти</div></div>";

                    document.body.append(Guild_Board);

                    if (Mission_Act > 0) {
                        let Button = document.querySelector(".Button");
                        Button.style.backgroundColor = "gray";
                        Button.innerText = "Здати";
                    } else if (Mission_Act == "Win") {
                        Button.style.backgroundColor = "green";
                    } else if (Mission_Act == "Loss") {
                        Button.style.backgroundColor = "red";
                    };  

                    let Button = document.querySelector(".Button");
                    Button.addEventListener('click', function (){
                        if (Mission_Act != 1){
                            Button.innerText = "Здати";
                            Button.style.backgroundColor = "gray";
                            Mission_Act = 1;
    
                            Act_Mission_Map (40, 15);
                        };
                    });
                });
            } else if (Mas_Citi_1[num] == 9){
                Pole[0].classList.add('CitiGP');
            };
            num++;
        };
    };
};

function Act_Mission_Map (x, y){
    let X = x;let Y = y;
    let R = Math.random() * 6;
    R = Math.ceil(R);
    X = X - 2 + R;

    R = Math.random() * 6;
    R = Math.ceil(R);
    Y = Y - 2 + R;

    let Pole = document.getElementsByName("x" + X + "_y" + Y);

    if (Pole[0].classList.contains('Zemlya')) {
        Pole[0].classList.add('Mission');

        Pole[0].addEventListener('click', function (){
            let Fight = document.createElement("div");
            Fight.classList = "Fight";
            Fight.innerHTML = "<div class='Fight_Info'><div id='Fight_Info_I' class='Fight_Info_Pynkt'><div class='Fight_Info_Pynkt_Foto'></div></div><div id='Fight_Info_You' class='Fight_Info_Pynkt'><div class='Fight_Info_Pynkt_Foto'></div></div></div><div class='Fight_Menu'><div id='Fight_Menu_Attack' class='Fight_Menu_Vubor'><div class='Fight_Menu_Text'>Захист</div><div id='DT' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Top'>T</div><div id='DL' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Left'>L</div><div id='DB' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Bottom'>B</div><div id='DR' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Right'>R</div></div><div class='Fight_Menu_Raund'><div class='Fight_Menu_Raund_Start'>Раунд</div></div><div id='Fight_Menu_Defense' class='Fight_Menu_Vubor'><div class='Fight_Menu_Text'>Атака</div><div id='AT' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Top'>T</div><div id='AL' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Left'>L</div><div id='AB' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Bottom'>B</div><div id='AR' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Right'>R</div></div></div>";
            document.body.append(Fight);
        });
    } else {
        for (q = 0; ; q++){
            X = x; Y = y;
            let R = Math.random() * 6;
            R = Math.ceil(R);
            X = X - 2 + R;
        
            R = Math.random() * 6;
            R = Math.ceil(R);
            Y = Y - 2 + R;
        
            let Pole = document.getElementsByName("x" + X + "_y" + Y);
            
            if (Pole[0].classList.contains('Zemlya')) {
                Pole[0].classList.add('Mission');

                Pole[0].addEventListener('click', function (){
                    let Fight = document.createElement("div");
                    Fight.classList = "Fight";
                    Fight.innerHTML = "<div class='Fight_Info'><div id='Fight_Info_I' class='Fight_Info_Pynkt'><div class='Fight_Info_Pynkt_Foto'></div></div><div id='Fight_Info_You' class='Fight_Info_Pynkt'><div class='Fight_Info_Pynkt_Foto'></div></div></div><div class='Fight_Menu'><div id='Fight_Menu_Attack' class='Fight_Menu_Vubor'><div class='Fight_Menu_Text'>Захист</div><div id='DT' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Top'>T</div><div id='DL' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Left'>L</div><div id='DB' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Bottom'>B</div><div id='DR' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Right'>R</div></div><div class='Fight_Menu_Raund'><div class='Fight_Menu_Raund_Start'>Раунд</div></div><div id='Fight_Menu_Defense' class='Fight_Menu_Vubor'><div class='Fight_Menu_Text'>Атака</div><div id='AT' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Top'>T</div><div id='AL' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Left'>L</div><div id='AB' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Bottom'>B</div><div id='AR' class='Fight_Menu_Vubor_Punkt Fight_Menu_Vubor_Punkt-Right'>R</div></div></div>";
                    document.body.append(Fight);
                });

                return;
            };
        };
    };
};


function Leave_Guild_Board () {
    let Guild_Board = document.querySelector('.Guild_Board'); Guild_Board.remove();
};
