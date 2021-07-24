let doc = document;
let { log } = console;

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

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
        question: "Что выведет код? Console.log(Number.isNan('string')); Console.log(isNaN('string'))",
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
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 11

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()