let doc = document;
let { log } = console;

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause() {
    if (count == 0) {
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "ВЫКЛ музыку ⏸";
    } else {
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "ВКЛ музыку ►";
    }

}

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question: 'Какой из следующих методов удаляет последний элемент из массива и возвращает его?',
        choice1: 'pop()',
        choice2: 'last()',
        choice3: 'get()',
        choice4: 'None',
        answer: 1,
    },
    {
        question:
            "Что вернет код: Boolean(10 > 9) ?",
        choice1: "true",
        choice2: "false",
        choice3: "NaN",
        choice4: "Error",
        answer: 1,
    },
    {
        question: "Как добавить комментарий в Javascript?",
        choice1: "'This is a comment",
        choice2: "//This is a comment",
        choice3: "<!--This is a comment-->",
        choice4: "*This is a comment*",
        answer: 2,
    },
    {
        question: "Как получить элемент по идентификатору из документа?",
        choice1: "document.getElementById(id)",
        choice2: "document.getElementsById(id)",
        choice3: "getElementById(document, id)",
        choice4: "getElementsById(document, id)",
        answer: 1,
    },
    {
        question: "Что выведет код? \n Console.log(Number.isNan('string')); \n Console.log(isNaN('string'))",
        choice1: "true true",
        choice2: "false true",
        choice3: "true false",
        choice4: "false false",
        answer: 2,
    },
    {
        question: "Как вызвать функцию 'myFunction'?",
        choice1: "call myFunction()",
        choice2: "call function myFunction()",
        choice3: "myFunction()",
        choice4: "myFunction(){...}",
        answer: 3,
    },
    {
        question: "Как заблокировать поведение браузера по умолчанию при событии?",
        choice1: "event.default = false",
        choice2: "event.preventDefault()",
        choice3: "event.stopPropagation()",
        choice4: "event.stop()",
        answer: 2,
    },
    {
        question: "Внешний файл JavaScript должен содержать тег <script>?",
        choice1: "Да",
        choice2: "Нет",
        choice3: "Не знаю",
        choice4: "Я сеньор и на такие вопросы не буду отвечать!",
        answer: 2,
    },
    {
        question: "Какое событие срабатывает при нажатии на HTML элемент?",
        choice1: "Onclick",
        choice2: "Onemouseclick",
        choice3: "Onemouseover",
        choice4: "onchange",
        answer: 1,
    },
    {
        question: "Как округлить 7.25 до целого?",
        choice1: "rnd(7.25)",
        choice2: "round(7.25)",
        choice3: "Math.rnd(7.25)",
        choice4: "Math.round(7.25)",
        answer: 4,
    },
    {
        question: "Как правильно написать условие i не равно 5?",
        choice1: "if (i <> 5)",
        choice2: "if i =! 5 then",
        choice3: "if i <> 5",
        choice4: "if (i != 5)",
        answer: 4,
    },
    {
        question: "Как правильно объявить массив?",
        choice1: "var colors = 'red', 'green', 'blue'",
        choice2: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        choice3: "var colors = (1:'red', 2:'green', 3:'blue')",
        choice4: "var colors = ['red', 'green', 'blue']",
        answer: 4,
    },
    {
        question: "Как правильно объявить цикл for?",
        choice1: "for (i <= 5; i++)",
        choice2: "for i = 1 to 5",
        choice3: "for (i = 0; i <= 5)",
        choice4: "for (i = 0; i <= 5; i++)",
        answer: 4,
    },
    {
        question: "Что такое event.target?",
        choice1: "элемент, на который мы 'навешиваем' событие",
        choice2: "элемент, на котором произошло событие",
        choice3: "элемент, который последним срабатывает при обработке события",
        choice4: "элемент, который первым срабатывает при обработке события",
        answer: 2,
    },
    {
        question: "В каком варианте ответов все типы данных примитивные?",
        choice1: "string, undefined, symbol",
        choice2: "string, function",
        choice3: "BigInt, number, Object",
        choice4: "ни один из ответов не верен",
        answer: 1,
    },
    {
        question: "Что означает термин - поднятие (hoisting)?",
        choice1: "термин обьясняет перемещение в начало вашего кода объявления переменной или функции физически",
        choice2: "термин обьясняет передачу переменной в область памяти функции",
        choice3: "термин, используемый для описания перемещения переменных и функций в начало их области (глобальной или функциональной), где мы определяем эту переменную или функцию",
        choice4: "термин, используемый для описания перемещения переменных и функций в начальный файл с которого начинается выполнение кода",
        answer: 3,
    },
    {
        question: "Что верно про область видимости?",
        choice1: "это область, где у нас есть действительный доступ к переменным или функциям",
        choice2: "это область, где мы можем объявлять и вызывать только функции",
        choice3: "в js существует два типа области видимости",
        choice4: "все верно",
        answer: 1,
    },
    {
        question: "В чем разница между == и ===??",
        choice1: "при == (абстрактное равенство) происходит приведение к одному типу данных слева направо",
        choice2: "при === (строгое равенство) сравнивается по значению и типу без приведения типов, а при == (абстрактное равенство) только по значению",
        choice3: "при == (абстрактное равенство) сравнивается по значениею, а === (строгое равенство) сравниваем по типу, но не значению",
        choice4: "одно и то же, отличий нет как и в скобочках",
        answer: 2,
    },
    {
        question: "Что верно про свойство prototype в объектах?",
        choice1: "оно хранит мета-данные про объект",
        choice2: "это тоже самое что и this, т.е. записи this.a и someObj.prototype.a идентичны",
        choice3: "это основна прототипного наследования в JavaScript",
        choice4: "Obj.prototype = Obj.__proto__",
        answer: 3,
    },
    {
        question: "Что выведет в консоль? \n const set = new Set(['1','0','3','4','0','5',]); \n console.log(set.size)",
        choice1: "4",
        choice2: "5",
        choice3: "6",
        choice4: "undefined",
        answer: 2,
    },
    {
        question: "Что выведет в консоль? \n const o = {}; \n console.log(o.toString === Object.prototype.toString)",
        choice1: "ничего не выведет, возникнет ошибка",
        choice2: "true",
        choice3: "false",
        choice4: "NaN",
        answer: 2,
    },
    {
        question: "Что верно про async/await?",
        choice1: "способ написания асинхронного или неблокирующего кода в JavaScript более читабельно",
        choice2: "это вид асинхронных функций которые обрабатываются синхронно",
        choice3: "это вид асинхронных функций которые возвращают результат в переданный колбэк",
        choice4: "это способ объявления асинхронных функций",
        answer: 1,
    },
    {
        question: "Что такое процесс прокидывания события (Event Bubbling)?",
        choice1: "это процесс когда событие передается ко всем родителям целевого элемента вплоть до window",
        choice2: "привязка одного события сразу на несколько DOM-элементов вызов всех обработчиков одного события по стеку",
        choice3: "вызов всех обработчиков одного события по стеку",
        choice4: "Это не связано с событиями, это пузырбковый метод сортировки массива",
        answer: 1,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 23;

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    };

    questionCounter++;
    progressText.innerText = `Вопрос ${questionCounter} из ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        };

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();