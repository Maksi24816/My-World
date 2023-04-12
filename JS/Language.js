let Language_Let = localStorage.getItem("Language_DTR");

if (Language_Let != null){Language(Language_Let)};

function Language (Language) {
	localStorage.setItem("Language_DTR", Language);

	document.querySelector(".LanguageSelection").style.display = "none";
	document.body.style.background = "none";

	if(Language == "Uk"){
		document.getElementById("h1").innerText = "Вітаю в мойому світі";
		document.getElementById("h2_1").innerText = "Що це ?";
		document.getElementById("p").innerText = "На цьому сайті ми можете побачити плоди моєї праці";
		document.getElementById("h2_2").innerText = "Навіщо я його створив ?";
		document.getElementById("WhyPole_h3_1").innerText = "Привід 1";
		document.getElementById("WhyPole_p_1").innerText = "Палиця з обізяни зробила людину";
		document.getElementById("WhyPole_h3_2").innerText = "Привід 2";
		document.getElementById("WhyPole_p_2").innerText = "Щоб продемонструвати своє портфоліо";
		document.getElementById("WhyPole_h3_3").innerText = "Привід 3";
		document.getElementById("WhyPole_p_3").innerText = "Щоб спати не хотілося";
		document.getElementById("h2_3").innerText = "Що ж тут можно побачити ( зараз ) ?";
		document.getElementById("ThereIsPole_p_1-1").innerText = "ФронтЕнд";
		document.getElementById("ThereIsPole_p_2-1").innerText = "ФронтЕнд (Храниліще знань)";
		document.getElementById("ThereIsPole_p_3-1").innerText = "ГеймДев";
		document.getElementById("ThereIsPole_p_4-1").innerText = "Трішки про мене";
		document.getElementById("ThereIsPole_p_5-1").innerText = "Підвал";
		document.getElementById("h2_4").innerText = "Що ж тут можно побачити ( потім ) ?";
		document.getElementById("ThereIsPole_p_1-2").innerText = "Малюнки, рисунки, ілюстрації, т.д.";
		document.getElementById("ThereIsPole_p_2-2").innerText = "Вірші, літературу, т.д.";
		document.getElementById("ThereIsPole_p_3-2").innerText = "Відомості про мене";
		document.getElementById("ThereIsPole_p_4-2").innerText = "В планая невелика соціальна сіть";
		document.getElementById("ThereIsPole_p_5-2").innerText = "Гарний настрій";
		document.getElementById("Five_H2").innerText = "Трішки про мене";
		document.getElementById("Five_P").innerText = "!!!";
	} else if (Language == "Ru"){
		document.getElementById("h1").innerText = "Приветствую в моем мире";
		document.getElementById("h2_1").innerText = "Что это ?";
		document.getElementById("p").innerText = "На этом сайте мы можете увидеть плоды моего труда";
		document.getElementById("h2_2").innerText = "Зачем я его создал?";
		document.getElementById("WhyPole_h3_1").innerText = "Причина 1";
		document.getElementById("WhyPole_p_1").innerText = "Палка из обезьяны сделала человека";
		document.getElementById("WhyPole_h3_2").innerText = "Причина 2";
		document.getElementById("WhyPole_p_2").innerText = "Чтобы продемонстрировать свое портфолио";
		document.getElementById("WhyPole_h3_3").innerText = "Причина 3";
		document.getElementById("WhyPole_p_3").innerText = "Чтобы спать не хотелось";
		document.getElementById("h2_3").innerText = "Что же здесь можно увидеть (сейчас)?";
		document.getElementById("ThereIsPole_p_1-1").innerText = "ФронтЭнд";
		document.getElementById("ThereIsPole_p_2-1").innerText = "ФронтЭнд (Хранилище знаний)";
		document.getElementById("ThereIsPole_p_3-1").innerText = "ГеймДев";
		document.getElementById("ThereIsPole_p_4-1").innerText = "Немного обо мне";
		document.getElementById("ThereIsPole_p_5-1").innerText = "Подвал";
		document.getElementById("h2_4").innerText = "Что же здесь можно увидеть (потом)?";
		document.getElementById("ThereIsPole_p_1-2").innerText = "Малюнки, рисунки, иллюстрации , т.д.";
		document.getElementById("ThereIsPole_p_2-2").innerText = "Стихи, литературу, т.д.";
		document.getElementById("ThereIsPole_p_3-2").innerText = "Сведения о моей жизни";
		document.getElementById("ThereIsPole_p_4-2").innerText = "В плане небольшая социальную сеть";
		document.getElementById("ThereIsPole_p_5-2").innerText = "Хорошее настроение";
		document.getElementById("Five_H2").innerText = "Немного обо мне";
		document.getElementById("Five_P").innerText = "!!!";
	} else if (Language == "En"){
		document.getElementById("h1").innerText = "Welcome to my world";
		document.getElementById("h2_1").innerText = "What is this ?";
		document.getElementById("p").innerText = "On this site you can see the fruits of my labor";
		document.getElementById("h2_2").innerText = "Why did I create it?";
		document.getElementById("WhyPole_h3_1").innerText = "Reason 1";
		document.getElementById("WhyPole_p_1").innerText = "A stick made a man out of a monkey";
		document.getElementById("WhyPole_h3_2").innerText = "Reason 2";
		document.getElementById("WhyPole_p_2").innerText = "To showcase your portfolio";
		document.getElementById("WhyPole_h3_3").innerText = "Reason 3";
		document.getElementById("WhyPole_p_3").innerText = "To not want to sleep";
		document.getElementById("h2_3").innerText = "What can be seen here (now)?";
		document.getElementById("ThereIsPole_p_1-1").innerText = "Front End";
		document.getElementById("ThereIsPole_p_2-1").innerText = "Front End (Knowledge repository)";
		document.getElementById("ThereIsPole_p_3-1").innerText = "GameDev";
		document.getElementById("ThereIsPole_p_4-1").innerText = "A little bit about me";
		document.getElementById("ThereIsPole_p_5-1").innerText = "Basement";
		document.getElementById("h2_4").innerText = "What can be seen here (then)?";
		document.getElementById("ThereIsPole_p_1-2").innerText = "Drawings, illustrations, etc.";
		document.getElementById("ThereIsPole_p_2-2").innerText = "Poems, literature, etc.";
		document.getElementById("ThereIsPole_p_3-2").innerText = "Information about my life";
		document.getElementById("ThereIsPole_p_4-2").innerText = "I want to create a small social network";
		document.getElementById("ThereIsPole_p_5-2").innerText = "Good mood";
		document.getElementById("Five_H2").innerText = "A little bit about me";
		document.getElementById("Five_P").innerText = "!!!";
	};
}
