let Language_Let = localStorage.getItem("Language_DTR");

if (Language_Let == null){LanguageSelection(Language_Let)} else {Language(Language_Let)};

function LanguageSelection (){
	document.querySelector(".LanguageSelection").style.display = "flex";
}

function Language (Language) {
	document.body.style.overflow = "auto";

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
		document.getElementById("h2_3").innerText = "Що є !";
		document.getElementById("ThereIsPole_p_1-1").innerText = "ФронтЕнд";
		document.getElementById("ThereIsPole_p_2-1").innerText = "ФронтЕнд (Храниліще знань)";
		document.getElementById("ThereIsPole_p_3-1").innerText = "ГеймДев";
		document.getElementById("ThereIsPole_p_4-1").innerText = "Трішки про мене";
		document.getElementById("ThereIsPole_p_5-1").innerText = "Підвал";
		document.getElementById("h2_4").innerText = "Що буде !";
		document.getElementById("ThereIsPole_p_1-2").innerText = "Малюнки, рисунки, ілюстрації, т.д.";
		document.getElementById("ThereIsPole_p_2-2").innerText = "Вірші, літературу, т.д.";
		document.getElementById("ThereIsPole_p_3-2").innerText = "Відомості про мене";
		document.getElementById("ThereIsPole_p_4-2").innerText = "В планая невелика соціальна сіть";
		document.getElementById("ThereIsPole_p_5-2").innerText = "Гарний настрій";
		document.getElementById("TwoH2").innerText = "ФронтЕнд";
		document.getElementById("Two_InfoP").innerText = "Що вас цікавить ?";
		document.getElementById("Choice1").innerText = "Міні сайти";
		document.getElementById("Choice2").innerText = "Елементи сайту";
		document.getElementById("Choice3").innerText = "Сайти";
		document.getElementById("PSite1_1").innerText = "Порожньо ;)";
		document.getElementById("PSite1_2").innerText = "Порожньо ;)";
		document.getElementById("PSite1_3").innerText = "Порожньо ;)";
		document.getElementById("PElement_1").innerText = "Старовинний годинник";
		document.getElementById("PElement_2").innerText = "Відчуття присутності";
		document.getElementById("PElement_3").innerText = "Порожньо ;)";
		document.getElementById("PElement_4").innerText = "Порожньо ;)";
		document.getElementById("PElement_5").innerText = "Порожньо ;)";
		document.getElementById("PSite2_1").innerText = "Недокопія ВК";
		document.getElementById("PSite2_2").innerText = "Порожньо ;)";
		document.getElementById("PSite2_3").innerText = "Порожньо ;)";
		document.getElementById("ThreeBottomLeft").innerText = "ФронтЕнд";
		document.getElementById("ThreeBottomRight").innerText = "БекЕнд";
		document.getElementById("ThreeTitle").innerText = "Веб Сховище";
		document.getElementById("FourH").innerText = "Ігри";
		document.getElementById("Five_H2").innerText = "Трішки про мене";
		document.getElementById("Five_P").innerText = "Бережіть себе!)";
		document.getElementById("Text_Elevator").innerText = "Модернізація";
		document.getElementById("Room_Gven").innerText = "Помічниця Гвен";
		document.getElementById("LanguagesText").innerText = "Мови";
		document.getElementById("Two_h2_1").innerText = "Що це ?";
		document.getElementById("Two_p").innerText = "ФронтЕнд - візуальна частина будь-якого веб-додатка";
		document.getElementById("Info1").innerText = "Чесно кажучи навіть не знаю що тут написати... )";
		document.getElementById("Info2").innerText = "Хто я ?";
		document.getElementById("Info3").innerText = "Так-так це саме питання !)";
		document.getElementById("Info4").innerText = "Зараз я намагаюся стати програмістом, хоча до справжнього програміста мені ще далеко, але я точно знаю що мені це подобається - що і є найголовнішим.";
		document.getElementById("Info5").innerText = "Живу я досить однообразно, так що складно щось про себе розповісти... (Сподіваюся що скоро стане цікавіше)";
		document.getElementById("Info6").innerText = "Якщо так подумати, найяскравіше чим я раніше займався - це рисування, саме рисування а не малювання.";
		document.getElementById("Info7").innerText = "Люблю музику, тому що вона пробуджує почуття ! Жанри: Рок, Реп, Класика.";
		document.getElementById("Info8").innerText = 'Я не "миломан" !';
		document.getElementById("Info9").innerText = "Жанри літератури які мені подобаються це: Фентезі, Пригоди, Історичні, Документальні...";
		document.getElementById("Info10").innerText = "Тягнути резину можно довго, так що краще побачити все своїми очима, чим витрачати час на цей безглуздий набір слів ;)";
		document.getElementById("InfoG").innerText = "Здоровенькі були !";
		document.getElementById("PWork").innerText = "Приклад роботи";
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
		document.getElementById("h2_3").innerText = "Что есть !";
		document.getElementById("ThereIsPole_p_1-1").innerText = "ФронтЭнд";
		document.getElementById("ThereIsPole_p_2-1").innerText = "ФронтЭнд (Хранилище знаний)";
		document.getElementById("ThereIsPole_p_3-1").innerText = "ГеймДев";
		document.getElementById("ThereIsPole_p_4-1").innerText = "Немного обо мне";
		document.getElementById("ThereIsPole_p_5-1").innerText = "Подвал";
		document.getElementById("h2_4").innerText = "Что будет !";
		document.getElementById("ThereIsPole_p_1-2").innerText = "Малюнки, рисунки, иллюстрации , т.д.";
		document.getElementById("ThereIsPole_p_2-2").innerText = "Стихи, литературу, т.д.";
		document.getElementById("ThereIsPole_p_3-2").innerText = "Сведения о моей жизни";
		document.getElementById("ThereIsPole_p_4-2").innerText = "В плане небольшая социальную сеть";
		document.getElementById("ThereIsPole_p_5-2").innerText = "Хорошее настроение";
		document.getElementById("TwoH2").innerText = "ФронтЭнд";
		document.getElementById("Two_InfoP").innerText = "Что вас интересует?";
		document.getElementById("Choice1").innerText = "Мини сайты";
		document.getElementById("Choice2").innerText = "Элементы сайта";
		document.getElementById("Choice3").innerText = "Сайты";
		document.getElementById("PSite1_1").innerText = "Пусто ;)";
		document.getElementById("PSite1_2").innerText = "Пусто ;)";
		document.getElementById("PSite1_3").innerText = "Пусто ;)";
		document.getElementById("PElement_1").innerText = "Старинные часы";
		document.getElementById("PElement_2").innerText = "Ощущение присутствия";
		document.getElementById("PElement_3").innerText = "Пусто ;)";
		document.getElementById("PElement_4").innerText = "Пусто ;)";
		document.getElementById("PElement_5").innerText = "Пусто ;)";
		document.getElementById("PSite2_1").innerText = "Недокопия ВК";
		document.getElementById("PSite2_2").innerText = "Пусто ;)";
		document.getElementById("PSite2_3").innerText = "Пусто ;)";
		document.getElementById("ThreeBottomLeft").innerText = "ФронтЭнд";
		document.getElementById("ThreeBottomRight").innerText = "БекЭнд";
		document.getElementById("ThreeTitle").innerText = "Веб Хранилище";
		document.getElementById("FourH").innerText = "Игры";
		document.getElementById("Five_H2").innerText = "Немного обо мне";
		document.getElementById("Five_P").innerText = "Берегите себя!)";
		document.getElementById("Text_Elevator").innerText = "Модернизация";
		document.getElementById("Room_Gven").innerText = "Помощница Гвен";
		document.getElementById("LanguagesText").innerText = "Языки";
		document.getElementById("Two_h2_1").innerText = "Что это ?";
		document.getElementById("Two_p").innerText = "ФронтЭнд – визуальная часть любого веб-приложения";
		document.getElementById("Info1").innerText = "Если по правде, я даже не знаю, что можно написать сюда... )";
		document.getElementById("Info2").innerText = "Кто я?";
		document.getElementById("Info3").innerText = "Да-да это именно вопрос!)";
		document.getElementById("Info4").innerText = "Сейчас я стараюсь стать программистом, хоть до настоящего программиста мне еще далеко, но я точно знаю, что мне это нравится – что и есть самым главным.";
		document.getElementById("Info5").innerText = "Живу я достаточно однообразно, так что сложно что-то о себе рассказать...";
		document.getElementById("Info6").innerText = "Если так подумать, ярче всего чем я раньше занимался – это рисование, именно рисование а не живопись.";
		document.getElementById("Info7").innerText = "Люблю музыку, потому что она пробуждает чувства! Жанры: Рок, Рэп, Классика.";
		document.getElementById("Info8").innerText = 'Я не "миломан" !';
		document.getElementById("Info9").innerText = "Жанры литературы, которые мне нравятся это: Фэнтези, Приключения, Исторические, Документальные...";
		document.getElementById("Info10").innerText = "Тащить резину можно долго, так что лучше увидеть все собственными глазами, чем тратить время на этот бессмысленный набор слов ;)";
		document.getElementById("InfoG").innerText = "Приветствую !";
		document.getElementById("PWork").innerText = "Пример работы";
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
		document.getElementById("h2_3").innerText = "What is !";
		document.getElementById("ThereIsPole_p_1-1").innerText = "Front End";
		document.getElementById("ThereIsPole_p_2-1").innerText = "Front End (Knowledge repository)";
		document.getElementById("ThereIsPole_p_3-1").innerText = "GameDev";
		document.getElementById("ThereIsPole_p_4-1").innerText = "A little bit about me";
		document.getElementById("ThereIsPole_p_5-1").innerText = "Basement";
		document.getElementById("h2_4").innerText = "What will be !";
		document.getElementById("ThereIsPole_p_1-2").innerText = "Drawings, illustrations, etc.";
		document.getElementById("ThereIsPole_p_2-2").innerText = "Poems, literature, etc.";
		document.getElementById("ThereIsPole_p_3-2").innerText = "Information about my life";
		document.getElementById("ThereIsPole_p_4-2").innerText = "I want to create a small social network";
		document.getElementById("ThereIsPole_p_5-2").innerText = "Good mood";
		document.getElementById("TwoH2").innerText = "FrontEnd";
		document.getElementById("Two_InfoP").innerText = "What interests you ?";
		document.getElementById("Choice1").innerText = "Mini sites";
		document.getElementById("Choice2").innerText = "Site elements";
		document.getElementById("Choice3").innerText = "Sites";
		document.getElementById("PSite1_1").innerText = "It's empty ;)";
		document.getElementById("PSite1_2").innerText = "It's empty ;)";
		document.getElementById("PSite1_3").innerText = "It's empty ;)";
		document.getElementById("PElement_1").innerText = "Ancient clock";
		document.getElementById("PElement_2").innerText = "A sense of presence";
		document.getElementById("PElement_3").innerText = "It's empty ;)";
		document.getElementById("PElement_4").innerText = "It's empty ;)";
		document.getElementById("PElement_5").innerText = "It's empty ;)";
		document.getElementById("PSite2_1").innerText = "Copy of VK";
		document.getElementById("PSite2_2").innerText = "It's empty ;)";
		document.getElementById("PSite2_3").innerText = "It's empty ;)";
		document.getElementById("ThreeBottomLeft").innerText = "FrontEnd";
		document.getElementById("ThreeBottomRight").innerText = "BackEnd";
		document.getElementById("ThreeTitle").innerText = "Web Storage";
		document.getElementById("FourH").innerText = "Games";
		document.getElementById("Five_H2").innerText = "A little bit about me";
		document.getElementById("Five_P").innerText = "Keep yourselves !)";
		document.getElementById("Text_Elevator").innerText = "Modernization";
		document.getElementById("Room_Gven").innerText = "Assistant Gwen";
		document.getElementById("LanguagesText").innerText = "Languages";
		document.getElementById("Two_h2_1").innerText = "What is this ?";
		document.getElementById("Two_p").innerText = "FrontEnd - the visual part of any web application";
		document.getElementById("Info1").innerText = "To be honest, I don't even know what to write here... )";
		document.getElementById("Info2").innerText = "Who am I ?";
		document.getElementById("Info3").innerText = "Yes, yes, this is exactly the question!)";
		document.getElementById("Info4").innerText = "Now I'm trying to become a programmer, although I am still far from being a real programmer, but I know for sure that I like it - which is the most important thing.";
		document.getElementById("Info5").innerText = "I live quite monotonous, so it's hard to tell something about myself...";
		document.getElementById("Info6").innerText = "If you think about it, the brightest thing that I did before was drawing, namely drawing and not painting.";
		document.getElementById("Info7").innerText = "I love music because it awakens the senses! Genres: Rock, Rap, Classical.";
		document.getElementById("Info8").innerText = "I'm not a 'melomaniac'!";
		document.getElementById("Info9").innerText = "Genres of literature that I like: Fantasy, Adventure, Historical, Documentary...";
		document.getElementById("Info10").innerText = "Rubber can be dragged for a long time, so it's better to see everything with your own eyes than to waste time on this meaningless set of words;)";
		document.getElementById("InfoG").innerText = "Congratulations !";
		document.getElementById("PWork").innerText = "An example of work";
	};
}
