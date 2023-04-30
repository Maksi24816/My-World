const Mouth = document.getElementById("Mouth");
const TextMouths = document.querySelector(".Gven_Pole");

TextMouths.innerHTML = TextMouths.innerHTML + "<p class='P_II'>" + "Чимось допомогти ? </p>";

let Name;
window.addEventListener("keypress", (event) =>{
    if (event.code == "Enter"){
        TextMouths.innerHTML = TextMouths.innerHTML + "<p class='P_You'>" + Mouth.value + "</p>";

        if (Mouth.classList.contains("Name")){
            Name = Mouth.value;
            TextMouths.innerHTML = TextMouths.innerHTML + "<p class='P_II'>" + "Щаслива познайомитися "+ Name + " !</p>";
            Mouth.classList.remove("Name")
        } else {
            II(Mouth.value);
        }

        Mouth.value = "";
    }
});