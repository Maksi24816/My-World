function Menu () {
    let Menu = document.createElement("div");
    Menu.classList = "Menu";
    Menu.innerHTML = "<div class='Start' onclick = 'Login_Are_Start ();'>Start</div>";

    document.body.append(Menu);
};Menu();

function ExitMenu () {
    let Menu = document.querySelector('.Menu');
    Menu.style.visibility = 'hidden';
};

function Login_Are_Start () {
    
    let Act = localStorage.getItem('Login_Act');

    if (Act == "True"){
        ExitMenu ();
        CreatePole (50, 75); 
        Zemlya (50, 75); 
        Create_Info_Menu ();
    } else {
        Login_F ();
    }
};

function Login_F () {

    ExitMenu ();

    let Login = document.createElement("div");
    Login.classList = "Login";
    Login.innerHTML = "<span>Введіть ім'я</span><input class='Text' type='text'><button onclick='Proverka ();'>Почати</button>";

    document.body.append(Login);
}

function Proverka () {
    let Value = document.querySelector('.Text');

    if (Value.value.trim() != "") {
        let Name = Value.value;
        localStorage.setItem('Name', Name);

        let Login = document.querySelector('.Login');
        Login.remove();

        CreatePole (50, 75); 
        Zemlya (50, 75); 

        localStorage.setItem('Login_Act', "True");
    };
};

function Create_Info_Menu () {
    let Ava = document.createElement("div");
    Ava.classList = "Ava";
    Ava.innerHTML = "<span>Ava</span>";

    let Name = localStorage.getItem('Name');

    let Name_Pole = document.createElement("div");
    Name_Pole.classList = "Name_Pole";
    Name_Pole.innerHTML = "<span>" + Name + "</span>";

    let Time = document.createElement("div");
    Time.classList = "Time";
    let WidthWindow = document.documentElement.clientWidth;
    WidthWindow = (WidthWindow - 500) / 2;
    Time.style.left = WidthWindow + "px";
    Time.innerHTML = "<div class='Time_Data'>Вік 00.00.0000</div><div class='Spid'><div id='Stop' class='Spid_Knopka'>0</div><div id='Spid1' class='Spid_Knopka'>1</div><div id='Spid2' class='Spid_Knopka'>2</div><div id='Spid3' class='Spid_Knopka'>3</div></div>";

    let Map = document.createElement("div");
    Map.classList = "Map_Knopka";
    let WidthWindow2 = document.documentElement.clientWidth;
    WidthWindow2 = (WidthWindow2 - 100) / 2;
    Map.style.left = WidthWindow2 + "px";
    Map.innerHTML = "Мапа";

    document.body.append(Ava);
    document.body.append(Name_Pole);
    document.body.append(Time);
    document.body.append(Map);
};

// JSON.stringify() JSON.parse()

/*
function Graf () {
    const G1 = [[6,3],[7,3],[6,4],[7,4],[8,4],[9,4],[6,5],[7,5],[8,5],[6,6],[7,6],[6,7]];

    if(this.classList.contains('G1')){
        let Time = 0;
        for (let x = 0; x < 12;x++){
            let g = G1[x];
            let g2 = document.getElementsByName("x" + g[0] + "_y" + g[1]);
            g2[0].style.opacity = "1";
        };
        let S1 = setInterval(function(){
            Time++;
            console.log(Time);
            if (Time > 3) {
                for (let x = 0; x < 12;x++){
                    g = G1[x];
                    g2 = document.getElementsByName("x" + g[0] + "_y" + g[1]);
                    g2[0].style.opacity = "0.75";
                };
                clearTimeout(S1);
            };
        }, 1000);
        return;
    };

    for (let x = 0; x < 12;x++){
        let g = G1[x];
        let g2 = document.getElementsByName("x" + g[0] + "_y" + g[1]);
        g2[0].classList.add('G1');
    };
};
*/
