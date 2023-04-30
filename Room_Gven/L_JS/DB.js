let NameAct = false;
let NameData, NewNameData;

let Greeting = false;

function II (Value) {
    console.log(Value)
    let GArr = new Array(
        {Word: 'привіт', Value: "Greeting"},
        {Word: 'ку', Value: "Greeting"},
        {Word: 'привітик', Value: "Greeting"},
        {Word: 'привітики', Value: "Greeting"},
        {Word: 'вітаннячко', Value: "Greeting"},
        {Word: 'хі', Value: "Greeting"},
        {Word: 'вітання', Value: "Greeting"},
        )
    let Arr = Value.match(/\S{1,}/gi);
    //console.log(Arr)


    for(let y = 0; y < Arr.length; y++){
        for(let z = 0; z < GArr.length; z++){
            if (Arr[y].toLowerCase() == GArr[z].Word){
                if (GArr[z].Value == "Greeting"){
                    Greeting = true;
                }
            }
        }
    }

    if (Greeting == true){
        Greeting = false;
        NewNameData = new Date().getTime();
        SummData = NewNameData - NameData;
        if (NameAct == false){
            TextMouths.innerHTML = TextMouths.innerHTML + "<p class='P_II'> Мої привітання ! <br> Мене звати Гвен, а до тебе як звертатися ?" + "</p>";
            Mouth.classList.add("Name");
            NameAct = true;
            NameData = new Date().getTime();
        } else if (SummData > 86400000) {
            TextMouths.innerHTML = TextMouths.innerHTML + "<p class='P_II'> Щаслива новій зустрічі, " + Name + " !</p>";
            NameData = new Date().getTime();
        } else {
            TextMouths.innerHTML = TextMouths.innerHTML + "<p class='P_II'> Ми вже віталися сьогодні ) </p>";
            NameData = new Date().getTime();
        }
    } else {
        TextMouths.innerHTML = TextMouths.innerHTML + "<p class='P_II'> Вибач, я не знаю як відповісти ( </p>";
    }

    /*for(let y = 0; y < GArr.length; y++){
        if (Value.toLowerCase() == Changeable.Word){
            let ChangeableValue = Changeable.Value;
            if (ChangeableValue == "Greeting"){
                NewNameData = new Date().getTime();
                SummData = NewNameData - NameData;
                if (NameAct == false){
                    TextMouths.innerHTML = TextMouths.innerHTML + "<p class='P_II'> Мої привітання ! <br> мене звати Гвен, а до тебе як звертатися ?" + "</p>";
                    Mouth.classList.add("Name");
                    NameAct = true;
                    NameData = new Date().getTime();
                    console.log(NameData)
                } else if (SummData > 86400) {
                    TextMouths.innerHTML = TextMouths.innerHTML + "<p class='P_II'> Щаслива новій зустрічі, " + Name + " !</p>";
                    NameData = new Date().getTime();
                } else {
                    TextMouths.innerHTML = TextMouths.innerHTML + "<p class='P_II'> Вже віталися ) </p>";
                    NameData = new Date().getTime();
                }
            }
        } else {
            TextMouths.innerHTML = TextMouths.innerHTML + "<p class='P_II'> Вибач, я не знаю що відповісти ( </p>";
        }
    }*/
}