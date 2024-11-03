debugger;

const quizSelectElement = document.getElementById("quiz-select");
const quizRunElement = document.getElementById("quiz-run");
const quizResultElement = document.getElementById("quiz-result");

//let quizObject = await readJsonFile("./json/quiz.json");

let quizObject = {
    quizArray : [ 
        {
            quizName : "Djur Quiz",
            questionsArray : [
                {
                    question : "Hur många ben har en myra?",
                    answers : ["4st", "6st", "8st", "10st"],
                    correctIndexAnswer : 1
                },
                {
                    question : "En zebra är...",
                    answers : ["rutig", "grön", "randig", "blå"],
                    correctIndexAnswer : 2
                }
            ]
        },
        {
            quizName : "Data Quiz",
            questionsArray : [
                {
                    question : "Vilken av följande är ett programmeringsspråk?",
                    answers : ["Hamburger", "Coffee", "Whiskey", "Java"],
                    correctIndexAnswer : 3
                },
                {
                    question : "Vad står MB för?",
                    answers : ["Mera Byte", "Många Byte", "Mega Byte", "Multi Byte"],
                    correctIndexAnswer : 0
                }
            ]
        },
        {
            quizName : "Frukt Quiz",
            questionsArray : [
                {
                    question : "Vilken av följande är ett programmeringsspråk?",
                    answers : ["Hamburger", "Coffee", "Whiskey", "Java"],
                    correctIndexAnswer : 3
                },
                {
                    question : "Vad står MB för?",
                    answers : ["Mera Byte", "Många Byte", "Mega Byte", "Multi Byte"],
                    correctIndexAnswer : 0
                }
            ]
        },
        {
            quizName : "Elektronik Quiz",
            questionsArray : [
                {
                    question : "Vilken av följande är ett programmeringsspråk?",
                    answers : ["Hamburger", "Coffee", "Whiskey", "Java"],
                    correctIndexAnswer : 3
                },
                {
                    question : "Vad står MB för?",
                    answers : ["Mera Byte", "Många Byte", "Mega Byte", "Multi Byte"],
                    correctIndexAnswer : 0
                }
            ]
        },
        {
            quizName : "Geografi Quiz",
            questionsArray : [
                {
                    question : "Vilken av följande är ett programmeringsspråk?",
                    answers : ["Hamburger", "Coffee", "Whiskey", "Java"],
                    correctIndexAnswer : 3
                },
                {
                    question : "Vad står MB för?",
                    answers : ["Mera Byte", "Många Byte", "Mega Byte", "Multi Byte"],
                    correctIndexAnswer : 0
                }
            ]
        },
        {
            quizName : "Spel Quiz",
            questionsArray : [
                {
                    question : "Vilken av följande är ett programmeringsspråk?",
                    answers : ["Hamburger", "Coffee", "Whiskey", "Java"],
                    correctIndexAnswer : 3
                },
                {
                    question : "Vad står MB för?",
                    answers : ["Mera Byte", "Många Byte", "Mega Byte", "Multi Byte"],
                    correctIndexAnswer : 0
                }
            ]
        },
        {
            quizName : "Möbel Quiz",
            questionsArray : [
                {
                    question : "Vilken av följande är ett programmeringsspråk?",
                    answers : ["Hamburger", "Coffee", "Whiskey", "Java"],
                    correctIndexAnswer : 3
                },
                {
                    question : "Vad står MB för?",
                    answers : ["Mera Byte", "Många Byte", "Mega Byte", "Multi Byte"],
                    correctIndexAnswer : 0
                }
            ]
        },
        {
            quizName : "Litteratur Quiz",
            questionsArray : [
                {
                    question : "Vilken av följande är ett programmeringsspråk?",
                    answers : ["Hamburger", "Coffee", "Whiskey", "Java"],
                    correctIndexAnswer : 3
                },
                {
                    question : "Vad står MB för?",
                    answers : ["Mera Byte", "Många Byte", "Mega Byte", "Multi Byte"],
                    correctIndexAnswer : 0
                }
            ]
        },
        {
            quizName : "Historie Quiz",
            questionsArray : [
                {
                    question : "Vilken av följande är ett programmeringsspråk?",
                    answers : ["Hamburger", "Coffee", "Whiskey", "Java"],
                    correctIndexAnswer : 3
                },
                {
                    question : "Vad står MB för?",
                    answers : ["Mera Byte", "Många Byte", "Mega Byte", "Multi Byte"],
                    correctIndexAnswer : 0
                }
            ]
        },
        {
            quizName : "Kemi Quiz",
            questionsArray : [
                {
                    question : "Vilken av följande är ett programmeringsspråk?",
                    answers : ["Hamburger", "Coffee", "Whiskey", "Java"],
                    correctIndexAnswer : 3
                },
                {
                    question : "Vad står MB för?",
                    answers : ["Mera Byte", "Många Byte", "Mega Byte", "Multi Byte"],
                    correctIndexAnswer : 0
                }
            ]
        }
    ]
};

let currentQuiz = quizObject.quizArray[0]; // 0 = Djur Quiz, 1 = Data Quiz
let currentAnswers = [];


/* Baker */



/* Henrik */
const quizListElement = document.getElementById("quiz-list");
const quizSliderElement = document.getElementById("quiz-slider");

/* Load function */

loadQuizzes(quizListElement, "quiz-list-item");
loadQuizzes(quizSliderElement, "quiz-slider-item");

function loadQuizzes(elementObj, classNames) {
    for(let i=0; i<quizObject.quizArray.length; i++) {
        const quiz = quizObject.quizArray[i];
        const quizName = quiz.quizName;
        const quizElement = document.createElement("p");
        quizElement.dataset.id = i;
        quizElement.classList.add(classNames);
        quizElement.addEventListener("click", (e) => selectQuiz(quizElement));
        quizElement.innerHTML = quiz.quizName;
        elementObj.appendChild(quizElement);
    }
}

function selectQuiz(quiz) {
    currentQuiz = quizObject.quizArray[quiz.dataset.id];
    quizListElement.classList.add("collapsed");
    quizRunElement.classList.remove("collapsed");
    
    console.log(`Quiz ${quiz.dataset.id} selected`);
    // loadQuiz();
}

/* Media breakpoint handler */

const mql = window.matchMedia("(min-width: 1024px)");

mql.addEventListener("change", (event) => {
    const width = parseInt(window.getComputedStyle(document.querySelector("body")).getPropertyValue('width'));

    if(width >= 1024) {
        quizListElement.classList.add("collapsed");
        quizSliderElement.classList.remove("collapsed");
    } else {
        quizListElement.classList.remove("collapsed");
        quizSliderElement.classList.add("collapsed");
    }
});

/* Scroll event handler */
let itemScrollPositions;

quizSliderElement.addEventListener("scroll", (e) => scrollEventHandler(e));

function scrollEventHandler(e) {
    console.log("scroll event");
    const quizSliderItemsElement = Array.from(document.getElementsByClassName("quiz-slider-item"));
    const quizSliderItemsElementWidth = parseInt(window.getComputedStyle(quizSliderItemsElement[0]).getPropertyValue('width'));
    console.log("quizSliderElement.scrollWidth", quizSliderElement.scrollWidth);
    console.log("quizSliderItemsElementWidth", quizSliderItemsElementWidth);
    console.log("quizSliderElement.scrollLeft", quizSliderElement.scrollLeft);
    console.log("quizSliderItemsElementWidth + quizSliderElement.scrollLeft", quizSliderItemsElementWidth + quizSliderElement.scrollLeft);

    itemScrollPositions = calculateItemScrollPositions();
    console.log("itemScrollPositions", itemScrollPositions);

    const scrollPos = quizSliderElement.scrollLeft / quizSliderItemsElementWidth;
    scaleSliderItems(quizSliderItemsElement, scrollPos);

}

function calculateItemScrollPositions() {
    const quizSliderItemsElement = Array.from(document.getElementsByClassName("quiz-slider-item"));
    const quizSliderItemsElementWidth = parseInt(window.getComputedStyle(quizSliderItemsElement[0]).getPropertyValue('width'));
    const itemScrollPositions = [];
    console.log("quizSliderElement.scrollWidth", quizSliderElement.scrollWidth);
    console.log("quizSliderItemsElementWidth", quizSliderItemsElementWidth);
    console.log("quizSliderElement.scrollLeft", quizSliderElement.scrollLeft);
    console.log("quizSliderItemsElementWidth + quizSliderElement.scrollLeft", quizSliderItemsElementWidth + quizSliderElement.scrollLeft);

    let scrollPosition = 0;
    for(let i=0; i<quizSliderItemsElement.length; i++) {
        itemScrollPositions.push(scrollPosition);
        scrollPosition += quizSliderItemsElementWidth;
    }
    return itemScrollPositions;
}

function scaleSliderItems(quizSliderItemsElement, scrollPos) {
    scrollPos = Math.min(scrollPos, quizSliderItemsElement.length-1);
    console.log("scrollPos", scrollPos);
    const indexInFocus = Math.round(scrollPos);
    const indexLeft = Math.floor(scrollPos);
    const indexRight = Math.ceil(scrollPos);
    const indexLeftDiff = scrollPos - indexLeft;
    const indexRightDiff = indexRight - scrollPos;
    const leftFontSize = 1 + 8*(1-indexLeftDiff);
    const rightFontSize = 1 + 8*(1-indexRightDiff);

    for(let i=0; i<=quizSliderItemsElement.length-1; i++) {
        quizSliderItemsElement[i].style.fontSize = `1rem`;
        quizSliderItemsElement[i].style.color = "#000000";
        quizSliderItemsElement[i].style.zIndex = "0";
        quizSliderItemsElement[i].style.cursor = "default";
        quizSliderItemsElement[i].removeEventListener("click", (e) => SliderQuiz(e.target));
    }

    quizSliderItemsElement[indexLeft].style.fontSize = `${leftFontSize}rem`;
    quizSliderItemsElement[indexRight].style.fontSize = `${rightFontSize}rem`;

    quizSliderItemsElement[indexInFocus].style.cursor = "pointer";
    quizSliderItemsElement[indexInFocus].style.color = "#54C4F8";
    quizSliderItemsElement[indexInFocus].style.zIndex = "1";
    quizSliderItemsElement[indexInFocus].addEventListener("click", (e) => selectQuiz(e.target));
}


/* Kaj */


    
/* Viktor */

