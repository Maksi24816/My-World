
const BoxZero = document.getElementsByClassName('Box');
const Box = BoxZero[0];

const Element1Blox1 = document.getElementById('1-1');
const Element2Blox1 = document.getElementById('2-1');
const Element3Blox1 = document.getElementById('3-1');
const Element4Blox1 = document.getElementById('4-1');
const Element5Blox1 = document.getElementById('5-1');

Element1Blox1.addEventListener('click', () => {
    Element1Blox1.classList.add('NowAct');
    DeleteAct1();
});
Element2Blox1.addEventListener('click', () => {
    Element2Blox1.classList.add('NowAct');
    DeleteAct1();
});
Element3Blox1.addEventListener('click', () => {
    Element3Blox1.classList.add('NowAct');
    DeleteAct1();
});
Element4Blox1.addEventListener('click', () => {
    Element4Blox1.classList.add('NowAct');
    DeleteAct1();
});
Element5Blox1.addEventListener('click', () => {
    Element5Blox1.classList.add('NowAct');
    DeleteAct1();
});

function DeleteAct1() {
    const Element = document.querySelector('.NowAct')
    const Parent = Element.parentElement;
    const ChildParentsNumder = Parent.childElementCount;
    const ChildParents = Parent.children;

    const InfoText1 = document.getElementById('InfoText1');
    const InfoText2 = document.getElementById('InfoText2');
    const InfoText3 = document.getElementById('InfoText3');

    InfoText1.innerHTML = "(align-items) <br><br> Поведінка тексту по вертикалі";

    for (let num = 0; num < ChildParentsNumder; num++)
    {
        if ( ChildParents[num].classList.contains('Act')) {
        ChildParents[num].classList.remove('Act');
        console.log([1 + num] + ' Remove Act')
        } else {
            console.log([1 + num] + ' No Act')
        }
    };

    Element.classList.add('Act');
    Element.classList.remove('NowAct');

    
    if(Element1Blox1.classList.contains('Act')){
        Box.style.alignItems = "flex-start";
        InfoText2.innerHTML = "Починає будівництво елементів сверну <br><br> Треба ж щось написати... ^_^";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> align-items: flex-start;<br>}";
    }else if (Element2Blox1.classList.contains('Act')){
        Box.style.alignItems = "Center";
        InfoText2.innerHTML = "Будує елементи по центру<br><br> Треба ж щось написати... ^_^";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> align-items: center;<br>}";
    }else if (Element3Blox1.classList.contains('Act')){
        Box.style.alignItems = "flex-end";
        InfoText2.innerHTML = "Починає будівництво елементів снизу <br><br> Треба ж щось написати... ^_^";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> align-items: flex-end<br>}";
    }else if (Element4Blox1.classList.contains('Act')){
        Box.style.alignItems = "stretch";
        InfoText2.innerHTML = "Жадяги !!! <br><br> Займає все що зміг";
        InfoText3.innerHTML = ".Box_Bunny{<br>   display: flex;<br> align-items: stretch;<br>}";
    }else if (Element5Blox1.classList.contains('Act')){
        Box.style.alignItems = "baseline";
        InfoText2.innerHTML = "Будує елемент по базовій лінії <br><br> В нашому випадку, по лінії нумерування";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> align-items: baseline;<br>}";
    };
}


///////////////////////////////////////////////////////

const Element1Blox2 = document.getElementById('1-2');
const Element2Blox2 = document.getElementById('2-2');
const Element3Blox2 = document.getElementById('3-2');
const Element4Blox2 = document.getElementById('4-2');
const Element5Blox2 = document.getElementById('5-2');
const Element6Blox2 = document.getElementById('6-2');

Element1Blox2.addEventListener('click', () => {
    Element1Blox2.classList.add('NowAct');
    DeleteAct2();
});
Element2Blox2.addEventListener('click', () => {
    Element2Blox2.classList.add('NowAct');
    DeleteAct2();
});
Element3Blox2.addEventListener('click', () => {
    Element3Blox2.classList.add('NowAct');
    DeleteAct2();
});
Element4Blox2.addEventListener('click', () => {
    Element4Blox2.classList.add('NowAct');
    DeleteAct2();
});
Element5Blox2.addEventListener('click', () => {
    Element5Blox2.classList.add('NowAct');
    DeleteAct2();
});
Element6Blox2.addEventListener('click', () => {
    Element6Blox2.classList.add('NowAct');
    DeleteAct2();
});


function DeleteAct2() {
    const Element = document.querySelector('.NowAct')
    const Parent = Element.parentElement;
    const ChildParentsNumder = Parent.childElementCount;
    const ChildParents = Parent.children;
    
    const InfoText1 = document.getElementById('InfoText1');
    const InfoText2 = document.getElementById('InfoText2');
    const InfoText3 = document.getElementById('InfoText3');

    InfoText1.innerHTML = "(justify-content) <br><br> Поведінка тексту по горизонталі";

    for (let num = 0; num < ChildParentsNumder; num++)
    {
        if ( ChildParents[num].classList.contains('Act')) {
        ChildParents[num].classList.remove('Act');
        console.log([1 + num] + ' Remove Act')
        } else {
            console.log([1 + num] + ' No Act')
        }
    };

    Element.classList.add('Act');
    Element.classList.remove('NowAct');

    if(Element1Blox2.classList.contains('Act')){
        Box.style.justifyContent = "flex-start";
        InfoText2.innerHTML = "Починає будівництво елементу з лівої сторони <br><br> Треба ж щось написати... ^_^";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> justify-content: flex-start;<br>}";
    }else if (Element2Blox2.classList.contains('Act')){
        Box.style.justifyContent = "Center";
        InfoText2.innerHTML = "Будує елемент по центру<br><br> Треба ж щось написати... ^_^";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> justify-content: Center;<br>}";
    }else if (Element3Blox2.classList.contains('Act')){
        Box.style.justifyContent = "flex-end";
        InfoText2.innerHTML = "Починає будівництво елементу з правої сторони <br><br> Треба ж щось написати... ^_^";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> justify-content: flex-end;<br>}";
    }else if (Element4Blox2.classList.contains('Act')){
        Box.style.justifyContent = "space-between";
        InfoText2.innerHTML = "Будує елементи на всю ширину, при цьому розраховує однакову відстань між елементами (не враховуючи країв)";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> justify-content: space-between;<br>}";
    }else if (Element5Blox2.classList.contains('Act')){
        Box.style.justifyContent = "space-around";
        InfoText2.innerHTML = "Якщо коротко - розраховує одинакові відступи зліва та справа для кожного елемента";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> justify-content: space-around;<br>}";
    }else if (Element6Blox2.classList.contains('Act')){
        Box.style.justifyContent = "space-evenly";
        InfoText2.innerHTML = "Будує елементи на всю ширину, при цьому розраховує однакову відстань між елементами (враховуючи краї)";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> justify-content: space-evenly;<br>}";
    };
    
}

///////////////////////////////////////////////////////

const Element1Blox3 = document.getElementById('1-3');
const Element2Blox3 = document.getElementById('2-3');
const Element3Blox3 = document.getElementById('3-3');
const Element4Blox3 = document.getElementById('4-3');

Element1Blox3.addEventListener('click', () => {
    Element1Blox3.classList.add('NowAct');
    DeleteAct3();
});
Element2Blox3.addEventListener('click', () => {
    Element2Blox3.classList.add('NowAct');
    DeleteAct3();
});
Element3Blox3.addEventListener('click', () => {
    Element3Blox3.classList.add('NowAct');
    DeleteAct3();
});
Element4Blox3.addEventListener('click', () => {
    Element4Blox3.classList.add('NowAct');
    DeleteAct3();
});
function DeleteAct3() {
    const Element = document.querySelector('.NowAct')
    const Parent = Element.parentElement;
    const ChildParentsNumder = Parent.childElementCount;
    const ChildParents = Parent.children;
    
    const InfoText1 = document.getElementById('InfoText1');
    const InfoText2 = document.getElementById('InfoText2');
    const InfoText3 = document.getElementById('InfoText3');

    InfoText1.innerHTML = "(flex-wrap) <br><br> Властивості при переносі";

    for (let num = 0; num < ChildParentsNumder; num++)
    {
        if ( ChildParents[num].classList.contains('Act')) {
        ChildParents[num].classList.remove('Act');
        console.log([1 + num] + ' Remove Act')
        } else {
            console.log([1 + num] + ' No Act')
        }
    };

    Element.classList.add('Act');
    Element.classList.remove('NowAct');


    const Size = document.querySelector('.Box')

    if(Element1Blox3.classList.contains('Act')){
        Box.style.flexWrap = "nowrap";
        Size.style.width = '250px';
        InfoText2.innerHTML = "Не дозволяє перенос <br><br> Треба ж щось написати... ^_^";
        InfoText3.innerHTML = ".Box_Bonny{<br> width:250px;<br>display: flex;<br> flex-wrap: nowrap;<br>}";
    }else if (Element2Blox3.classList.contains('Act')){
        Box.style.flexWrap = "wrap";
        Size.style.width = '250px';
        InfoText2.innerHTML = "Дозволяє перенос <br><br> Треба ж щось написати... ^_^";
        InfoText3.innerHTML = ".Box_Bonny{<br> width:250px;<br>   display: flex;<br> flex-wrap: wrap;<br>}";
    }else if (Element3Blox3.classList.contains('Act')){
        Box.style.flexWrap = "wrap-reverse";
        Size.style.width = '250px';
        InfoText2.innerHTML = "Тут вже цікавіше !)<br><br> Переносе елементи нагору";
        InfoText3.innerHTML = ".Box_Bonny{<br> width:250px;<br>   display: flex;<br> flex-wrap: wrap-reverse;<br>}";
    }else if (Element4Blox3.classList.contains('Act')){
        Box.style.flexWrap = "initial";
        Size.style.width = '100%';
        InfoText2.innerHTML = "Повернув все як було <br><br> Не вигадую велосипед";
        InfoText3.innerHTML = ".Box_Bonny{<br> width:100%;<br>   display: flex;<br> flex-wrap: initial;<br>}";
    }
}

///////////////////////////////////////////////////////

const Element1Blox4 = document.getElementById('1-4');
const Element2Blox4 = document.getElementById('2-4');
const Element3Blox4 = document.getElementById('3-4');
const Element4Blox4 = document.getElementById('4-4');
const Element5Blox4 = document.getElementById('5-4');
const Element6Blox4 = document.getElementById('6-4');


Element1Blox4.addEventListener('click', () => {
    Element1Blox4.classList.add('NowAct');
    DeleteAct4();
});
Element2Blox4.addEventListener('click', () => {
    Element2Blox4.classList.add('NowAct');
    DeleteAct4();
});
Element3Blox4.addEventListener('click', () => {
    Element3Blox4.classList.add('NowAct');
    DeleteAct4();
});
Element4Blox4.addEventListener('click', () => {
    Element4Blox4.classList.add('NowAct');
    DeleteAct4();
});
Element5Blox4.addEventListener('click', () => {
    Element5Blox4.classList.add('NowAct');
    DeleteAct4();
});
Element6Blox4.addEventListener('click', () => {
    Element6Blox4.classList.add('NowAct');
    DeleteAct4();
});

function DeleteAct4() {
    const Element = document.querySelector('.NowAct')
    const Parent = Element.parentElement;
    const ChildParentsNumder = Parent.childElementCount;
    const ChildParents = Parent.children;
    
    const InfoText1 = document.getElementById('InfoText1');
    const InfoText2 = document.getElementById('InfoText2');
    const InfoText3 = document.getElementById('InfoText3');

    InfoText1.innerHTML = "(align-self) <br><br> Перезаписує значення (align-item) <br> Використовується щоб виділити один чи декілька елементів";

    for (let num = 0; num < ChildParentsNumder; num++)
    {
        if ( ChildParents[num].classList.contains('Act')) {
        ChildParents[num].classList.remove('Act');
        console.log([1 + num] + ' Remove Act')
        } else {
            console.log([1 + num] + ' No Act')
        }
    };

    Element.classList.add('Act');
    Element.classList.remove('NowAct');
    

    const Bony3 = Box.children[2];
    
    if(Element1Blox4.classList.contains('Act')){
        Bony3.style.alignSelf = "flex-start";
        InfoText2.innerHTML = "Починає будівництво елементів сверну <br><br> Треба ж щось написати... ^_^";
        InfoText3.innerHTML = ".Bony-3{<br>align-self: flex-start;<br>}<br><br>.Bony-3 - модифікатори для .Bony";
    }else if (Element2Blox4.classList.contains('Act')){
        Bony3.style.alignSelf = "Center";
        InfoText2.innerHTML = "Будує елементи по центру<br><br> Треба ж щось написати... ^_^";
        InfoText3.innerHTML = ".Bony-3{<br>align-self: Center;<br>}<br><br>.Bony-3 - модифікатори для .Bony";
    }else if (Element3Blox4.classList.contains('Act')){
        Bony3.style.alignSelf = "flex-end";
        InfoText2.innerHTML = "Починає будівництво елементів снизу <br><br> Треба ж щось написати... ^_^";
        InfoText3.innerHTML = ".Bony-3{<br>align-self: flex-end;<br>}<br><br>.Bony-3 - модифікатори для .Bony";
    }else if (Element4Blox4.classList.contains('Act')){
        Bony3.style.alignSelf = "stretch";
        InfoText2.innerHTML = "Жадяга !!! <br><br> Займає все що зміг";
        InfoText3.innerHTML = ".Bony-3{<br>align-self: stretch;<br>}<br><br>.Bony-3 - модифікатори для .Bony";
    }else if (Element5Blox4.classList.contains('Act')){
        Bony3.style.alignSelf = "baseline";
        InfoText2.innerHTML = "Будує елемент по базовій лінії <br><br> В нашому випадку, по лінії нумерування";
        InfoText3.innerHTML = ".Bony-3{<br>align-self:baseline;<br>}<br><br>.Bony-3 - модифікатори для .Bony";
    }else if (Element6Blox4.classList.contains('Act')){
        Bony3.style.alignSelf = "auto";
        InfoText2.innerHTML = "Повертав в стрій";
        InfoText3.innerHTML = ".Bony-3{<br>align-self: auto;<br>}<br><br>.Bony-3 модифікатори для .Bony";
    };
}

///////////////////////////////////////////////////////

const Element1Blox5 = document.getElementById('1-5');
const Element2Blox5 = document.getElementById('2-5');
const Element3Blox5 = document.getElementById('3-5');

Element1Blox5.addEventListener('click', () => {
    Element1Blox5.classList.add('NowAct');
    DeleteAct5();
});
Element2Blox5.addEventListener('click', () => {
    Element2Blox5.classList.add('NowAct');
    DeleteAct5();
});
Element3Blox5.addEventListener('click', () => {
    Element3Blox5.classList.add('NowAct');
    DeleteAct5();
});

function DeleteAct5() {
    const Act = document.querySelector('.NowAct')
    console.log(Act)
    const ActParent = Act.parentElement;
    console.log(ActParent)
    const ActChildParentsNumder = ActParent.childElementCount;
    const ActChildParents = ActParent.children;


    const Element = document.querySelector('.Bony-1')
    const Parent = Element.parentElement;
    const ChildParentsNumder = Parent.childElementCount;
    const ChildParents = Parent.children;

    for (let num = 0; num < ActChildParentsNumder; num++)
    {
        if ( ActChildParents[num].classList.contains('Act')) {
        ActChildParents[num].classList.remove('Act');
        console.log([1 + num] + ' Remove Act')
        } else {
            console.log([1 + num] + ' No Act')
        }
    };

    const InfoText1 = document.getElementById('InfoText1');
    const InfoText2 = document.getElementById('InfoText2');
    const InfoText3 = document.getElementById('InfoText3');
    
    InfoText1.innerHTML = "(order) <br><br> Міняє порядок елементів <br> Важливо!!! <br> При використанні, кожному елементу потрібно задати новий номер, інакше елементи які ви пропустили залишаються вне нумерації.";

    Act.classList.add('Act');
    Act.classList.remove('NowAct');

    for (let num = 0; num < ChildParentsNumder; num++)
    {
        if(Element1Blox5.classList.contains('Act')) {
            ChildParents[num].classList.add('Act_Bony')
            InfoText2.innerHTML = "БУГА-ГА !)";
            InfoText3.innerHTML = ".Bony-1.Act_Bony{order:1;}<br>.Bony-2.Act_Bony{order:4;}<br>.Bony-3.Act_Bony{order:2;}<br>.Bony-4.Act_Bony{order:5;}<br>.Bony-5.Act_Bony{order:3;}<br><br>.Bony-1 - 5 модифікатори для .Bony<br><br>.Act_Bony додатковий клас для модифікатора";
        } else if(Element2Blox5.classList.contains('Act')) {
            ChildParents[num].classList.add('Act_Bony')
            InfoText2.innerHTML = "Щось не так (";
            InfoText3.innerHTML = ".Bony-1.Act_Bony{order:1;}<br>.Bony-2.Act_Bony{order:4;}<br>.Bony-3.Act_Bony{order:2;}<br>.Bony-4.Act_Bony{order:5;}<br><br>.Bony-1 - 5 модифікатори для .Bony<br><br>.Act_Bony додатковий клас для модифікатора";
            ChildParents[4].classList.remove('Act_Bony')
        } else if(Element3Blox5.classList.contains('Act')) {
            ChildParents[num].classList.remove('Act_Bony')
            InfoText2.innerHTML = "Викл.";
            InfoText3.innerHTML = "";
        };

    };
}
///////////////////////////////////////////////////////

const Element1Blox6 = document.getElementById('1-6');
const Element2Blox6 = document.getElementById('2-6');
const Element3Blox6 = document.getElementById('3-6');

const InfoText2 = document.getElementById('InfoText2');
const InfoText3 = document.getElementById('InfoText3');

Element1Blox6.addEventListener('click', () => {
    Element1Blox6.classList.toggle('NowAct');
    DeleteAct6();
    InfoText2.innerHTML = "Щось їх розперло <br><br> flex-grow - коефіцієнт розширення <br> Чим більший коефіцієнт, тим скоріше він буде розширюватися<br><br> Наприклад якщо одному елементу задать коефіцієнт - 1, а другому - 2, то другий в два рази швидше буде розширюватися<br><br> Гарна річ при адаптиві, деякі елементи можна виділити, чи взагалі залити лише його";
    InfoText3.innerHTML = "Пишу через flex-grow, тому що варіації flex можуть бути різними <br><br> .Bonny-1 - 5{<br>flex-grow: 1;<br>}";
});
Element2Blox6.addEventListener('click', () => {
    Element2Blox6.classList.toggle('NowAct');
    DeleteAct6();
    InfoText2.innerHTML = "Щось не те!!!<br><br> flex-shrink - коефіцієнт звуження <br><br> Чим більший коефіцієнт, тим скоріше він буде звужуватися <br><br> Наприклад якщо одному елементу задать коефіцієнт - 1, а другому - 2, то другий в два рази швидше буде звужуватися <br><br> Гарна річ при адаптиві, деякі елементи можна зменшити, чи взагалі прибрати";
    InfoText3.innerHTML = "Пишу через flex-shrink, тому що варіації flex можуть бути різними <br><br> .Box_Bonny{<br>width: 200px;<br>}<br><br> .Bonny-1 - 5{<br>flex-shrink: 0;<br>}";
});
Element3Blox6.addEventListener('click', () => {
    Element3Blox6.classList.toggle('NowAct');
    DeleteAct6();
    InfoText2.innerHTML = "Ну тут і так зрозуміло )<br><br> flex-basis - відповідає за базову ширину <br><br> Для галочки";
    InfoText3.innerHTML = "Пишу через flex-basis, тому що варіації flex можуть бути різними <br><br> .Bonny-1 - 5{<br>flex-basis: 80px;<br>}";
});


function DeleteAct6() {
    const Life = document.querySelector('.Bony')
    const Parent = Life.parentElement;
    const ChildParentsNumder = Parent.childElementCount;
    const ChildParents = Parent.children;

    const Size = document.querySelector('.Box')

    const InfoText1 = document.getElementById('InfoText1');

    InfoText1.innerHTML = "(flex) <br><br> Це універсальна властивість ширини, в її можливості входять: <br> flex-grow - відповідає за можливість розширюватися <br> flex-shrink - відповідає за можливість звужуватися <br> flex-basis - відповідає за базову ширину <br><br> Базове значення - 0 1 auto ";

    for (let num = 0; num < ChildParentsNumder; num++)
    {
        if(Element1Blox6.classList.contains('NowAct')){
            ChildParents[num].style.flexGrow = "1";
            Element1Blox6.classList.add('Act');
        }else{
            ChildParents[num].style.flexGrow = "0";
            Element1Blox6.classList.remove('Act');
        };

        if(Element2Blox6.classList.contains('NowAct')){
            ChildParents[num].style.flexShrink = "0";
            Element2Blox6.classList.add('Act');
            Size.style.width = '200px';
        }else{
            ChildParents[num].style.flexShrink = "1";
            Element2Blox6.classList.remove('Act');
            Size.style.width = '100%';
        };

        if(Element3Blox6.classList.contains('NowAct')){
            ChildParents[num].style.flexBasis = "80px";
            Element3Blox6.classList.add('Act');
        } else{       
            ChildParents[num].style.flexBasis = "auto";
            ChildParents[num].style.flexBasis = "40px";
            Element3Blox6.classList.remove('Act');
        };
    };

}

///////////////////////////////////////////////////////

const Element1Blox7 = document.getElementById('1-7');
const Element2Blox7 = document.getElementById('2-7');
const Element3Blox7 = document.getElementById('3-7');
const Element4Blox7 = document.getElementById('4-7');

Element1Blox7.addEventListener('click', () => {
    Element1Blox7.classList.add('NowAct');
    DeleteAct7();
});
Element2Blox7.addEventListener('click', () => {
    Element2Blox7.classList.add('NowAct');
    DeleteAct7();
});
Element3Blox7.addEventListener('click', () => {
    Element3Blox7.classList.add('NowAct');
    DeleteAct7();
});
Element4Blox7.addEventListener('click', () => {
    Element4Blox7.classList.add('NowAct');
    DeleteAct7();
});

function DeleteAct7() {
    const Element = document.querySelector('.NowAct')
    const Parent = Element.parentElement;
    const ChildParentsNumder = Parent.childElementCount;
    const ChildParents = Parent.children;
    
    const InfoText1 = document.getElementById('InfoText1');
    const InfoText2 = document.getElementById('InfoText2');
    const InfoText3 = document.getElementById('InfoText3');
    
    InfoText1.innerHTML = "(flex-direction) <br><br> Дозволяє поміняти місцями властивості (align-items) та (justify-content)<br> Що в свою чергу гарненько допоможе при створенні сайту <br> Також може перевернути сторінки с ног на голову";

    for (let num = 0; num < ChildParentsNumder; num++)
    {
        if ( ChildParents[num].classList.contains('Act')) {
        ChildParents[num].classList.remove('Act');
        console.log([1 + num] + ' Remove Act')
        } else {
            console.log([1 + num] + ' No Act')
        }
    };

    Element.classList.add('Act');
    Element.classList.remove('NowAct');


    if(Element1Blox7.classList.contains('Act')){
        Box.style.flexDirection = "row";
        InfoText2.innerHTML = "Стандарт";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> flex-direction: row;<br>}";
    }else if (Element2Blox7.classList.contains('Act')){
        Box.style.flexDirection = "row-reverse";
        InfoText2.innerHTML = "Стандарт-навпаки";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> flex-direction: row-reverse;<br>}";
    }else if (Element3Blox7.classList.contains('Act')){
        Box.style.flexDirection = "column";
        InfoText2.innerHTML = "Щоб побачити нормальний приклад, раджу увімкнуті:<br> (flex-wrap) - wrap <br><br> Слідкуйте за номерами";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> flex-direction: column;<br>}";
    }else if (Element4Blox7.classList.contains('Act')){
        Box.style.flexDirection = "column-reverse";
        InfoText2.innerHTML = "Щоб побачити нормальний приклад, раджу увімкнуті:<br> (flex-wrap) - wrap <br><br> Слідкуйте за номерами";
        InfoText3.innerHTML = ".Box_Bonny{<br>   display: flex;<br> flex-direction: column-reverse;<br>}";
    };
}

///////////////////////////////////////////////////////